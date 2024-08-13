/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { sortOrderSchema } from "./sort-order";import { z } from 'zod';

export const sortDtoSchema = z.object({
    column: z.string(),
    sortOrder: sortOrderSchema
});

export type SortDto = z.infer<typeof sortDtoSchema>;
