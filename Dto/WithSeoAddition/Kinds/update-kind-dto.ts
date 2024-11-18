/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export const updateKindDtoSchema = z.object({
	'slug': z.string().max(128),
	'hint': z.string().max(64),
	'seoAddition': updateSeoAdditionDtoSchema,
	'id': z.string().uuid().regex(/\S/)
});

export type UpdateKindDto = z.infer<typeof updateKindDtoSchema>;
