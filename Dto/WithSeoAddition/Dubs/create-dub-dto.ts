/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export const createDubDtoSchema = z.object({
	'name': z.string().max(128),
	'icon': z.string().max(2048).nullish(),
	'seoAddition': createSeoAdditionDtoSchema
});

export type CreateDubDto = z.infer<typeof createDubDtoSchema>;
