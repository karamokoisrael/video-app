import { UseCase } from "./base.use-case";

export class GetUserUseCase extends UseCase<any> {
  execute(_input: any): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
