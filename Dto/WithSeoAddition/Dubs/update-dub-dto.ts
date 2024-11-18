/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export const updateDubDtoSchema = z.object({
	'name': z.string().max(128),
	'icon': z.string().max(2048).nullish(),
	'seoAddition': updateSeoAdditionDtoSchema,
	'id': z.string().uuid().regex(/\S/)
});

export type UpdateDubDto = z.infer<typeof updateDubDtoSchema>;
