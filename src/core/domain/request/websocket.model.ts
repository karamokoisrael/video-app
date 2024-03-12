export type WebSocketMessage = {
  message: string;
  owner?: string;
  target?: string;
  content?: string;
};

export type DispatchFunction = (webSocketMessage: WebSocketMessage) => void;

export type WebSocketMessageType =
  | 'updateSocketKey'
  | 'notification'
  | 'connId'
  | 'readNotification'
  | 'updateNotifications'
  | 'readAllNotifications';
