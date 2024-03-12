import "reflect-metadata";
export enum IocDependencies {
  //repositories
  AppStateRepositoryPort = "AppStateRepositoryPort",
  ConfigRepositoryPort = "ConfigRepositoryPort",
  HttpRepositoryPort = "HttpRepositoryPort",
  ItemsRepositoryPort = "ItemsRepositoryPort",
  UserRepositoryPort = "UserRepositoryPort",

  //services
  AuthServicePort = "AuthServicePort",
  CurrencyServicePort = "CurrencyServicePort",
  ExchangeServicePort = "ExchangeServicePort",
  TestServicePort = "TestServicePort",
  TranslationServicePort = "TranslationServicePort",
  UserServicePort = "UserServicePort",
  WebSocketServicePort = "WebSocketServicePort",
}
