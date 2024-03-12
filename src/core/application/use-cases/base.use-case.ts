export abstract class UseCase<T, Q = void> {
  abstract execute(input: T): Promise<Q>;
}
