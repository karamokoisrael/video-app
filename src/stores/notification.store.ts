
import { Notification, NotificationStore } from "@/core/domain/notification/notification.model";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getStorage } from "@/stores/storage";

export const useNotificationStore = create(
  persist<NotificationStore>(
    (set, get) => ({
      hydrated: false,
      notifications: [],
      setNotifications: (notifications: Notification[]) =>
        set({ notifications }),
    }),
    {
      name: "notifications-store",
      storage: getStorage(),
      // storage: AsyncStorage as any,
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hydrated = true;
        }
      },
    }
  )
);
