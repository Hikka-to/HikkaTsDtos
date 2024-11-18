/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { socialTypeSchema } from './social-type';
import { z } from 'zod';

export const createSeoAdditionDtoSchema = z.object({
	'slug': z.string().max(128),
	'title': z.string().max(128),
	'description': z.string().max(278),
	'image': z.string().max(128).nullish(),
	'imageAlt': z.string().max(256).nullish(),
	'socialTitle': z.string().max(128).nullish(),
	'socialType': socialTypeSchema.nullish(),
	'socialImage': z.string().max(128).nullish(),
	'socialImageAlt': z.string().max(256).nullish()
});

export type CreateSeoAdditionDto = z.infer<typeof createSeoAdditionDtoSchema>;
