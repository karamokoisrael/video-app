import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { ItemsRepositoryPort } from "@/core/domain/shared/items-repository.port";
import { TranslationServicePort } from "@/core/domain/globalization/translation-service.port";
import {
  BaseHttpResponse,
  Query,
  PaginatedHttpResponse,
  Pagination,
} from "@/core/domain/request/request.model";
import { IocDependencies } from "@/ioc/ioc-dependencies";
import { HttpRepositoryPort } from "@/core/domain/shared/http-repository.port";

@injectable()
export class ItemsRepository implements ItemsRepositoryPort {
  private collection: string = "";
  private defaultConfigurations = {
    perPage: 10,
  };

  constructor(
    @inject(IocDependencies.HttpRepositoryPort)
    private readonly httpRepository: HttpRepositoryPort,
    @inject(IocDependencies.TranslationServicePort)
    readonly translationService: TranslationServicePort
  ) {}

  createNewInstance(collection: string): ItemsRepositoryPort {
      const itemsRepository = this;
      itemsRepository.setCollection(collection)
      return itemsRepository;
  }
  
  setCollection(collection: string) {
    this.collection = collection;
    return this;
  }

  async createOne<T>(
    params: Record<string, any>
  ): Promise<BaseHttpResponse<T>> {
    const url = `/${this.collection}/Create`;
    const result = await this.httpRepository.post<T>(url, params);
    return result;
  }

  async readByQuery<T>(query: Query): Promise<PaginatedHttpResponse<T>> {
    const endQuery: Record<string, any> = {};
    if (Object.keys(query).length > 0) {
      if (query.pagination) {
        endQuery._page = query.pagination?.page || 1;
        endQuery._perPage =
          query.pagination?.perPage || this.defaultConfigurations.perPage;
      }
      if (query.sort) {
        endQuery._sort = query.sort?.field;
        endQuery._order = query.sort?.order;
      }

      if (query.filter) {
        const filter = query.filter;
        Object.keys(filter).forEach((key) => {
          if (
            filter[key] != null &&
            filter[key] != "" &&
            filter[key] != undefined
          ) {
            endQuery[key] = filter[key];
          }
        });
      }
    }
    const url = `/${
      this.collection
    }/GetList?${this.httpRepository.objectToQueryString(endQuery)}`;
    const result = await this.httpRepository.get<T>(url);
    const pagination: Pagination = {
      total: 0,
      totalPages: 1,
      page: query.pagination?.page || 1,
      perPage: query.pagination?.perPage || this.defaultConfigurations.perPage,
    };

    try {
      if (result.headers && result.headers["X-Total-Count"]) {
        const total = result.headers["X-Total-Count"];
        if (total > 0) {
          pagination.total = parseInt(total);
          pagination.totalPages = Math.ceil(
            parseInt(total) / pagination.perPage
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
    return { ...result, pagination: pagination };
  }

  async readOne<T>(id: number): Promise<BaseHttpResponse<T>> {
    const url = `/${this.collection}/GetOne/${id}`;
    const result = await this.httpRepository.get<T>(url);
    return result;
  }

  async updateOne<T>(
    id: number | string,
    params: Record<string, any>
  ): Promise<BaseHttpResponse<T>> {
    const url = `/${this.collection}/Update/${id}`;
    const result = await this.httpRepository.put<T>(url, params);
    return result;
  }

  async deleteOne<T>(id: number | string): Promise<BaseHttpResponse<T>> {
    const url = `/${this.collection}/Delete/${id}`;
    const result = await this.httpRepository.delete<T>(url);
    return result;
  }
}
