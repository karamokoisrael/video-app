import { BaseHttpResponse } from "@/core/domain/request/request.model";
import { User } from "@/core/domain/user/user.model";


export abstract class UserRepositoryPort {
  abstract updateOne(data: any): Promise<Record<string, any>>;
  abstract readOne(): Promise<BaseHttpResponse<User>>;
  abstract isConnected(user: User): boolean;
}
