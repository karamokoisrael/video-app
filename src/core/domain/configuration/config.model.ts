export type AppConfig = {
  country: string;
};

export type GetConfigResponse = AppConfig;

export interface ConfigStore {
  hydrated: boolean;
  appConfig: AppConfig;
  language: string;
  setAppConfig: (appConfig: Partial<AppConfig>) => void;
  setLanguage: (language: string) => void;
}
