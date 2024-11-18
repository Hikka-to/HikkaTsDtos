/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const getUserAnimeListTypeDtoSchema = z.object({
	'slug': z.string(),
	'name': z.string(),
	'id': z.string().uuid().regex(/\S/)
});

export type GetUserAnimeListTypeDto = z.infer<typeof getUserAnimeListTypeDtoSchema>;
