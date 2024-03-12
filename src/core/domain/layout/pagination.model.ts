export type PaginatedDataCtrl<T> = {
    data: T,
    isLoading: boolean,
    currentPage: number,
    hasNextPage: boolean
}