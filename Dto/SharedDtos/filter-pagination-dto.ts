/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { FilterDto, filterDtoSchema } from "./filter-dto";
import { SortDto, sortDtoSchema } from "./sort-dto";import { z } from 'zod';

export interface FilterPaginationDto {
    pageNumber: number;
    pageSize: number;
    filters: FilterDto[][];
    sorts: SortDto[];
}

export const filterPaginationDtoProperties: (keyof FilterPaginationDto)[] = [
    'pageNumber',
    'pageSize',
    'filters',
    'sorts'
];

export const filterPaginationDtoSchema = z.object({
    pageNumber: z.number().int().min(1).max(2147483647).regex(/\S/),
    pageSize: z.number().int().min(1).max(50).regex(/\S/),
    filters: z.array(z.array(filterDtoSchema)),
    sorts: z.array(sortDtoSchema)
});
