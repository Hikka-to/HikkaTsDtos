/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const getRelatedDtoSchema = z.object({
	'animeId': z.string().uuid(),
	'animeGroupId': z.string().uuid(),
	'relatedTypeId': z.string().uuid(),
	'id': z.string().uuid().regex(/\S/)
});

export type GetRelatedDto = z.infer<typeof getRelatedDtoSchema>;
