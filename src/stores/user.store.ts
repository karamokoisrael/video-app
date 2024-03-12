import { UserStore, User } from "@/core/domain/user/user.model";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getStorage } from "@/stores/storage";

export const useUserStore = create(
    persist<UserStore>(
        (set, get) => ({
            hydrated: false,
            user: {} as never,
            setUser: (user: Partial<User>) =>
                set({
                    user: {
                        ...get().user,
                        ...user,
                        token: (get().user.token ? get().user.token : user.token) as string,
                    },
                }),

            logout: () => set({ user: {} as never }),
        }),
        {
            name: "user-store",
            storage: getStorage(),
            onRehydrateStorage: () => (state) => {
                if (state) {
                    state.hydrated = true;
                }
            },
        }
    )
);
