/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export const createStatusDtoSchema = z.object({
	'name': z.string().max(64),
	'seoAddition': createSeoAdditionDtoSchema
});

export type CreateStatusDto = z.infer<typeof createStatusDtoSchema>;
