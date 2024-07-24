/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { FilterDto } from "./filter-dto";
import { SortDto } from "./sort-dto";

export interface FilterPaginationDto {
    pageNumber: number;
    pageSize: number;
    filters: FilterDto[];
    sorts: SortDto[];
}
