import { AppConfig } from "@/core/domain/configuration/config.model";
import { User } from "@/core/domain/user/user.model";

export interface AppState {
  user: User;
  appConfig: AppConfig;
}
export abstract class AppStateRepositoryPort {
  abstract setUser(user: User): AppStateRepositoryPort;

  abstract setAppConfig(appConfig: AppConfig): AppStateRepositoryPort;

  abstract getState(): AppState;
}
