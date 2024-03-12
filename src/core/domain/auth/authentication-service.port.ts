import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, LogoutRequest } from "@/core/domain/auth/auth.model";
import { BaseHttpResponse } from "@/core/domain/request/request.model";


export abstract class AuthenticationServicePort {
  abstract login(
    payload: LoginRequest
  ): Promise<BaseHttpResponse<LoginResponse>>;
  abstract register(
    payload: RegisterRequest
  ): Promise<BaseHttpResponse<RegisterResponse>>;
  abstract logout(
    payload: LogoutRequest,
    authToken: string
  ): Promise<BaseHttpResponse<null>>;
}
