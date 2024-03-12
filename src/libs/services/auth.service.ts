import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AuthServicePort } from "@/core/domain/auth/auth-service.port";
import { TranslationServicePort } from "@/core/domain/globalization/translation-service.port";
import { Tokens } from "@/core/domain/auth/auth.model";
import { BaseHttpResponse } from "@/core/domain/request/request.model";
import { User } from "@/core/domain/user/user.model";
import { IocDependencies } from "@/ioc/ioc-dependencies";
import { HttpRepositoryPort } from "@/core/domain/shared/http-repository.port";

@injectable()
export class AuthService implements AuthServicePort {
  private collection = "User";
  constructor(
    @inject(IocDependencies.HttpRepositoryPort)
    private readonly httpRepository: HttpRepositoryPort,
    @inject(IocDependencies.TranslationServicePort)
    private readonly translationService: TranslationServicePort
  ) {}

  async login(data: any) {
    if (data.phone) data.phone = data.phone.replace("+", "");
    const result = await this.httpRepository.post<Record<string, any>>(
      `/${this.collection}/Login`,
      data
    );
    return result;
  }

  async register(data: any) {
    if (data.phone) data.phone = data.phone.replace("+", "");
    const result = await this.httpRepository.post<Record<string, any>>(
      `/${this.collection}/Register`,
      data
    );
    return result;
  }

  async passForgotten(data: any) {
    const result = await this.httpRepository.post<Record<string, any>>(
      `/${this.collection}/PassForgotten`,
      data
    );
    return result;
  }

  async reinitPassword(data: any) {
    const result = await this.httpRepository.post<Record<string, any>>(
      `/${this.collection}/ReinitPassword`,
      data
    );
    return result;
  }

  async refreshToken(
    user: User,
    hard = false
  ): Promise<BaseHttpResponse<Tokens>> {
    if (
      user.refreshToken == undefined ||
      user.refreshToken == "" ||
      user.tokenExpiration == undefined
    )
      throw new Error("User not connected");

    const currentDate = new Date().getTime();
    const expirationDate = new Date(user.tokenExpiration).getTime();
    const defaultDate = new Date("0001-01-01T00:00:00").getTime();
    const dateDiff = Math.ceil(
      (expirationDate - currentDate) / (1000 * 3600 * 24)
    );
    if (
      (expirationDate == defaultDate || dateDiff < 0 || dateDiff > 5) &&
      hard == false
    )
      throw new Error("Date not arrived yet");
    const result = await this.httpRepository.post<Tokens>(
      `/${this.collection}/RefreshToken`,
      { refreshToken: user.refreshToken }
    );
    return result;
  }

  async logout(refreshToken: string) {
    const result = await this.httpRepository.post<Record<string, any>>(
      `/${this.collection}/Logout`,
      { refreshToken }
    );
    return result;
  }
}
