import { AppConfig } from "@/core/domain/configuration/config.model";
import { BaseHttpResponse } from "@/core/domain/request/request.model";

export abstract class ConfigRepositoryPort {
  abstract read(): Promise<BaseHttpResponse<AppConfig>>;
}
