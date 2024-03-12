import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { ConfigRepositoryPort } from "@/core/domain/configuration/config-repository.port";
import { TranslationServicePort } from "@/core/domain/globalization/translation-service.port";
import { BaseHttpResponse } from "@/core/domain/request/request.model";
import { AppConfig } from "@/core/domain/configuration/config.model";
import { IocDependencies } from "@/ioc/ioc-dependencies";
import { HttpRepositoryPort } from "@/core/domain/shared/http-repository.port";
@injectable()
export class ConfigRepository implements ConfigRepositoryPort {
  private collection = "Config";
  constructor(
    @inject(IocDependencies.HttpRepositoryPort)
    private readonly httpRepository: HttpRepositoryPort,
    @inject(IocDependencies.TranslationServicePort)
    private readonly translationService: TranslationServicePort
  ) {}

  async read(): Promise<BaseHttpResponse<AppConfig>> {
    const url = `/${this.collection}/GetAll`;
    const result = await this.httpRepository.get<AppConfig>(url);
    return result;
  }
}
