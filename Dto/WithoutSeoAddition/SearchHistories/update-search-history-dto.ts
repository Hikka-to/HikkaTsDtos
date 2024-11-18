/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateSearchHistoryDtoSchema = z.object({
	'query': z.string().max(255),
	'createAt': z.date(),
	'id': z.string().uuid().regex(/\S/)
});

export type UpdateSearchHistoryDto = z.infer<typeof updateSearchHistoryDtoSchema>;
