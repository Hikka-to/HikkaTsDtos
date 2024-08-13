/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const getSearchHistoryDtoSchema = z.object({
    query: z.string(),
    createAt: z.date(),
    id: z.string().uuid()
});

export type GetSearchHistoryDto = z.infer<typeof getSearchHistoryDtoSchema>;
