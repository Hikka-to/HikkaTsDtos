/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateExternalLinkDtoSchema = z.object({
	'animeId': z.string().uuid(),
	'url': z.string().max(2048),
	'id': z.string().uuid().regex(/\S/)
});

export type UpdateExternalLinkDto = z.infer<typeof updateExternalLinkDtoSchema>;
