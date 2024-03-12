import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { UserRepositoryPort } from "@/core/domain/user/user-repository.port";
import { TranslationServicePort } from "@/core/domain/globalization/translation-service.port";
import { User } from "@/core/domain/user/user.model";
import { IocDependencies } from "@/ioc/ioc-dependencies";
import { HttpRepositoryPort } from "@/core/domain/shared/http-repository.port";

@injectable()
export class UserRepository implements UserRepositoryPort {
  private collection = "User";
  constructor(
    @inject(IocDependencies.HttpRepositoryPort)
    private readonly httpRepository: HttpRepositoryPort,
    @inject(IocDependencies.TranslationServicePort)
    private readonly translationService: TranslationServicePort
  ) { }

  async updateOne(data: any) {
    const result = await this.httpRepository.patch<Record<string, any>>(
      `/${this.collection}/Update`,
      data
    );
    return result;
  }

  async readOne() {
    const result = await this.httpRepository.get<User>(
      `/${this.collection}/GetData`
    );
    return result;
  }

  isConnected(user: User): boolean {
    if (user != null && user.id != undefined && user.id != -1) {
      return true;
    }
    return false;
  }
}
