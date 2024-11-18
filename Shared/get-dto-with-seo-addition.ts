/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { getSeoAdditionDtoSchema } from '../Dto/SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export const getDtoWithSeoAdditionSchema = z.object({
	'seoAddition': getSeoAdditionDtoSchema,
	'id': z.string().uuid().regex(/\S/)
});

export type GetDtoWithSeoAddition = z.infer<typeof getDtoWithSeoAdditionSchema>;
