/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const createSearchHistoryDtoSchema = z.object({
    query: z.string().length(255)
});

export type CreateSearchHistoryDto = z.infer<typeof createSearchHistoryDtoSchema>;
