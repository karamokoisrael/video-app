import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AppConfig, ConfigStore } from "@/core/domain/configuration/config.model";
import i18n from "@/libs/helpers/globalization.helper";
import { getStorage } from "@/stores/storage";

const useConfigStore = create(
  persist<ConfigStore>(
    (set, get) => ({
      hydrated: false,
      appConfig: {} as never,
      language: "fr",
      setAppConfig: (appConfig: Partial<AppConfig>) =>
        set({ appConfig: { ...get().appConfig, ...appConfig } }),
      setLanguage: (language: string) => {
        i18n.locale = language;
        set({ language });
      },
    }),
    {
      name: "config-store",
      storage: getStorage(),
      // storage: AsyncStorage as any,
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hydrated = true;
          i18n.locale = state.language;
        }
      },
    }
  )
);

export default useConfigStore;
