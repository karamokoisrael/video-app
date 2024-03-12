import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import ReconnectingWebSocket from "reconnecting-websocket";
import { WEBSOCKET_RECONNECT_INTERVAL } from "@/configurations/constants/request";
import { WebSocketServicePort } from "@/core/domain/shared/websocket-service.port";
import {
  DispatchFunction,
  WebSocketMessage,
  WebSocketMessageType,
} from "@/core/domain/request/websocket.model";
import { env } from "@/configurations/constants/environment";
import { IocDependencies } from "@/ioc/ioc-dependencies";
import { AppStateRepositoryPort } from "@/core/domain/configuration/app-state-repository.port";

@injectable()
export class WebSocketService implements WebSocketServicePort {
  private connectionId?: string;
  private webSocket: ReconnectingWebSocket;
  private dispatch: DispatchFunction;
  private accessToken: string;

  private options = {
    connectionTimeout: WEBSOCKET_RECONNECT_INTERVAL,
    maxRetries: 10,
  };

  constructor(
    @inject(IocDependencies.AppStateRepositoryPort)
    readonly appStateRepository: AppStateRepositoryPort
  ) {
    const { user } = appStateRepository.getState();
    this.accessToken = user.token;
    const socketUrl = `wss://${env.apiUrl}
      .replace("https://", "")
      .replace("http://", "")}?accessToken=${this.accessToken}`;
    this.webSocket = new ReconnectingWebSocket(socketUrl, [], this.options);
    this.webSocket.onmessage = this.handleMessage;
    this.dispatch = (message: WebSocketMessage) => console.log(message);
    return this;
  }

  serializeSocketMessage = (json: Record<string, any>) => JSON.stringify(json);

  deserializeSocketMessage = (string: string): WebSocketMessage =>
    JSON.parse(string);

  setSocketConnId(connectionId: string) {
    this.connectionId = connectionId;
  }

  setDispatcher(dispatchFunction: DispatchFunction) {
    this.dispatch = dispatchFunction;
  }

  async handleMessage(e: any) {
    try {
      const jsonResponse = this.deserializeSocketMessage(e.data);
      this.dispatch(jsonResponse);
    } catch (error) {
      console.log(error);
    }
  }

  sendSocketMessage = (
    userId: number,
    message: WebSocketMessageType,
    content?: string,
    target?: string,
    owner?: string
  ) => {
    if (!this.webSocket) return;

    const socketMessage: WebSocketMessage = {
      message: message,
      owner: userId.toString(),
    };

    if (content != undefined) socketMessage.content = content;
    if (target != undefined) socketMessage.target = target;
    if (owner != undefined) socketMessage.owner = owner;

    this.webSocket.send(this.serializeSocketMessage(socketMessage));
  };
}
