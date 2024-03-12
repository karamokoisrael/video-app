import { PaginatedDataCtrl } from "@/core/domain/layout/pagination.model";
import { ITEMS_PER_PAGE } from "@/configurations/constants/layout";



export function paginate<T>(paginationData: PaginatedDataCtrl<T>, output?: T, isLoading?: boolean): PaginatedDataCtrl<T> {
    const data = output ? output : paginationData.data;
    return {
        data,
        currentPage: paginationData.currentPage,
        isLoading: isLoading || false,
        hasNextPage: !(Array.isArray(data) && data.length < ITEMS_PER_PAGE)
    };
}

export function goToNextPage<T>(paginationData: PaginatedDataCtrl<T>, output?: T, isLoading?: boolean) {
    const data = output ? output : paginationData.data;
    return {
        data,
        currentPage: paginationData.currentPage + 1,
        isLoading: isLoading || false,
        hasNextPage: !(Array.isArray(data) && data.length < ITEMS_PER_PAGE)
    };
}

export function resetPagination<T>(paginationData: PaginatedDataCtrl<T>, isLoading = true) {
    return {
        data: Array.isArray(paginationData.data) ? [] : null as T,
        currentPage: 1,
        isLoading: isLoading,
        hasNextPage: true
    };
}

export function getInitialPage<T>(output: T, isLoading = true) {
    return {
        data: output,
        currentPage: 1,
        isLoading: isLoading,
        hasNextPage: true
    };
}

export const getKeySwrKey = (pageIndex: number, previousPageData: any) => {
    // reached the end
    if (previousPageData && !previousPageData.data) return null

    // first page, we don't have `previousPageData`
    if (pageIndex === 0) return "1";

    // add the cursor to the API endpoint
    return `${previousPageData.nextCursor}`;
}