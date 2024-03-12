import { AppStateRepositoryPort } from "@/core/domain/configuration/app-state-repository.port";
import { AppConfig } from "@/core/domain/configuration/config.model";
import { User } from "@/core/domain/user/user.model";
import { singleton } from "tsyringe";

@singleton()
export class AppStateRepository implements AppStateRepositoryPort {
  user: User | undefined;
  appConfig: AppConfig | undefined;

  setUser(user: User) {
    // console.log(new Date(), `: Setting User => ${user?.token}`);
    this.user = user;
    return this;
  }

  setAppConfig(appConfig: AppConfig) {
    this.appConfig = appConfig;
    return this;
  }

  getState() {
    return {
      user: this.user as User,
      appConfig: this.appConfig as AppConfig,
    };
  }
}
