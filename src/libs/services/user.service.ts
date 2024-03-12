import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { TranslationServicePort } from "@/core/domain/globalization/translation-service.port";
import { UserServicePort } from "@/core/domain/user/user-service.port";
import { AppConfig } from "@/core/domain/configuration/config.model";
import { User } from "@/core/domain/user/user.model";
import { IocDependencies } from "@/ioc/ioc-dependencies";
import { AppStateRepository } from "../repositories/app-state.repository";
import { AppStateRepositoryPort } from "@/core/domain/configuration/app-state-repository.port";

@injectable()
export class UserService implements UserServicePort {
  private user: User;
  private appConfig: AppConfig;

  constructor(
    @inject(IocDependencies.TranslationServicePort)
    translationService: TranslationServicePort,
    @inject(IocDependencies.AppStateRepositoryPort)
    appStateRepository: AppStateRepositoryPort
  ) {
    const appState = appStateRepository.getState();

    this.user = appState.user;
    this.appConfig = appState.appConfig;
  }
}
