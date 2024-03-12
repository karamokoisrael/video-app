export type ReqMessage = {
  message: string;
};

export type ReqError = {
  message: string;
  extensions: {
    code: string;
    status: number;
  };
};

export type BaseResponse<T> = {
  data: T;
  errors?: ReqError[];
};

export interface Query {
  pagination?: {
    page?: number;
    perPage?: number;
  };
  sort?: {
    field?: string;
    order?: string;
  };
  filter?: Record<string, any>;
}

export interface Pagination {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}
export interface BaseHttpResponse<T> {
  statusCode: number;
  headers?: Record<string, any>;
  message?: string;
  data?: T;
  pagination?: Pagination;
}

export interface PaginatedHttpResponse<T> extends BaseHttpResponse<T> {
  statusCode: number;
  headers?: Record<string, any>;
  message?: string;
  data?: T;
  pagination: Pagination;
}
