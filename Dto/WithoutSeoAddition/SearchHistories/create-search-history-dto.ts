/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface CreateSearchHistoryDto {
    query: string;
}

export const createSearchHistoryDtoProperties: (keyof CreateSearchHistoryDto)[] = [
    'query'
];

export const createSearchHistoryDtoSchema = z.object({
    query: z.string().length(255)
});
