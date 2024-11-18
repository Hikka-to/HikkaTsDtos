/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export const getLanguageDtoSchema = z.object({
	'name': z.string(),
	'locale': z.string(),
	'icon': z.string(),
	'seoAddition': getSeoAdditionDtoSchema,
	'id': z.string().uuid().regex(/\S/)
});

export type GetLanguageDto = z.infer<typeof getLanguageDtoSchema>;
