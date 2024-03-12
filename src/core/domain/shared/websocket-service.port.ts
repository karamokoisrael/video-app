import { WebSocketMessage, DispatchFunction, WebSocketMessageType } from "@/core/domain/request/websocket.model";

export abstract class WebSocketServicePort {
    abstract serializeSocketMessage(json: Record<string, any>): string;
    abstract deserializeSocketMessage(string: string): WebSocketMessage;
    abstract setSocketConnId(connectionId: string): void;
    abstract setDispatcher(dispatchFunction: DispatchFunction): void;
    abstract handleMessage(e: any): void;
    abstract sendSocketMessage(
        userId: number,
        message: WebSocketMessageType,
        content?: string,
        target?: string,
        owner?: string
    ): void;
}