/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { SortOrder, sortOrderSchema } from "./sort-order";import { z } from 'zod';

export interface SortDto {
    column: string;
    sortOrder: SortOrder;
}

export const sortDtoSchema = z.object({
    column: z.string(),
    sortOrder: sortOrderSchema
});
