/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export const createKindDtoSchema = z.object({
    slug: z.string().length(128),
    hint: z.string().length(64),
    seoAddition: createSeoAdditionDtoSchema
});

export type CreateKindDto = z.infer<typeof createKindDtoSchema>;
