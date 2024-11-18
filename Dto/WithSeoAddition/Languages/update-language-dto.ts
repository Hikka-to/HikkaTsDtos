/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export const updateLanguageDtoSchema = z.object({
	'name': z.string().max(64),
	'locale': z.string().max(2),
	'icon': z.string().max(2048),
	'seoAddition': updateSeoAdditionDtoSchema,
	'id': z.string().uuid().regex(/\S/)
});

export type UpdateLanguageDto = z.infer<typeof updateLanguageDtoSchema>;
