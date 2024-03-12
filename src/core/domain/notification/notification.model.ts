export interface Notification {
  id: number;
  userId: number;
  subject: string;
  message: string;
  type: number;
  date: Date;
  isRead: number;
  isActive: number;
}

export interface NotificationStore {
  hydrated: boolean;
  notifications: Notification[];
  setNotifications: (notifications: Notification[]) => void;
}
