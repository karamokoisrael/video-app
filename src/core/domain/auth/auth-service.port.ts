import { Tokens } from "@/core/domain/auth/auth.model";
import { BaseHttpResponse } from "@/core/domain/request/request.model";
import { User } from "@/core/domain/user/user.model";


export abstract class AuthServicePort {
  abstract login(data: any): Promise<BaseHttpResponse<Record<string, any>>>;

  abstract register(data: any): Promise<BaseHttpResponse<Record<string, any>>>;

  abstract passForgotten(data: any): Promise<BaseHttpResponse<Record<string, any>>>;

  abstract reinitPassword(data: any): Promise<BaseHttpResponse<Record<string, any>>>;

  abstract refreshToken(
    user: User,
    hard: boolean
  ): Promise<BaseHttpResponse<Tokens>>;

  abstract logout(refreshToken: string): Promise<BaseHttpResponse<Record<string, any>>>;
}
