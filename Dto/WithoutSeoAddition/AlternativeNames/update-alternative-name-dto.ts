/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateAlternativeNameDtoSchema = z.object({
	'animeId': z.string().uuid(),
	'name': z.string().max(156),
	'id': z.string().uuid().regex(/\S/)
});

export type UpdateAlternativeNameDto = z.infer<typeof updateAlternativeNameDtoSchema>;
