import { BaseHttpResponse } from "@/core/domain/request/request.model";


export abstract class HttpRepositoryPort {
  abstract getHeaders: (
    providedHeaders?: Record<string, any>
  ) => Record<string, any>;

  abstract getMessage: <T>(data: any) => BaseHttpResponse<T>;

  abstract getErrorMessage: <T>(error: any) => BaseHttpResponse<T>;

  abstract objectToQueryString: (query: Record<string, any>)=> string;
   
  abstract get: <T>(
    path: string,
    params?: Record<string, any>,
    config?: any,
    headers?: any
  ) => Promise<BaseHttpResponse<T>>;
  abstract post: <T>(
    path: string,
    params?: Record<string, any>,
    config?: any,
    headers?: any
  ) => Promise<BaseHttpResponse<T>>;
  abstract put: <T>(
    path: string,
    params?: Record<string, any>,
    config?: any,
    headers?: any
  ) => Promise<BaseHttpResponse<T>>;
  abstract patch: <T>(
    path: string,
    params?: Record<string, any>,
    config?: any,
    headers?: any
  ) => Promise<BaseHttpResponse<T>>;
  abstract delete: <T>(
    path: string,
    params?: Record<string, any>,
    config?: any,
    headers?: any
  ) => Promise<BaseHttpResponse<T>>;

  abstract postWithFiles: <T>(
    path: string,
    files: {
      name: string;
      data: any;
    }[],
    params: Record<string, any>,
    config?: any,
    headers?: any
  ) => Promise<BaseHttpResponse<T>>;
}
