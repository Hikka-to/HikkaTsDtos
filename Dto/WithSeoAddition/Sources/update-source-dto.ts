/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export const updateSourceDtoSchema = z.object({
	'name': z.string().max(64),
	'seoAddition': updateSeoAdditionDtoSchema,
	'id': z.string().uuid().regex(/\S/)
});

export type UpdateSourceDto = z.infer<typeof updateSourceDtoSchema>;
