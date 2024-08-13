/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { filterDtoSchema } from "./filter-dto";
import { sortDtoSchema } from "./sort-dto";import { z } from 'zod';

export const filterPaginationDtoSchema = z.object({
    pageNumber: z.number().int().min(1).max(2147483647),
    pageSize: z.number().int().min(1).max(50),
    filters: z.array(z.array(filterDtoSchema)),
    sorts: z.array(sortDtoSchema)
});

export type FilterPaginationDto = z.infer<typeof filterPaginationDtoSchema>;
