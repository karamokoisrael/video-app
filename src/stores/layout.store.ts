
import { LayoutStore } from "@/core/domain/layout/layout.model";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getStorage } from "@/stores/storage";

export const useLayoutStore = create(
  persist<LayoutStore>(
    (set, get) => ({
      hydrated: false,
      termsAndConditionsAccepted: false,
      acceptTermsAndConditions: () => set({ termsAndConditionsAccepted: true }),
      rejectTermsAndConditions: () => set({ termsAndConditionsAccepted: true }),
    }),
    {
      name: "layout-store",
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
