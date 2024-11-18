/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { socialTypeSchema } from './social-type';
import { z } from 'zod';

export const updateSeoAdditionDtoSchema = z.object({
	'id': z.string().uuid().regex(/\S/),
	'slug': z.string(),
	'title': z.string(),
	'description': z.string(),
	'image': z.string().nullish(),
	'imageAlt': z.string().nullish(),
	'socialTitle': z.string().nullish(),
	'socialType': socialTypeSchema.nullish(),
	'socialImage': z.string().nullish(),
	'socialImageAlt': z.string().nullish()
});

export type UpdateSeoAdditionDto = z.infer<typeof updateSeoAdditionDtoSchema>;
