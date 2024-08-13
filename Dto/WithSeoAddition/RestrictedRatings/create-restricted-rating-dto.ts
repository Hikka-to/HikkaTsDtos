/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export const createRestrictedRatingDtoSchema = z.object({
    name: z.string().length(10),
    value: z.number().int(),
    hint: z.string().length(64),
    icon: z.string().length(128).nullish(),
    seoAddition: createSeoAdditionDtoSchema
});

export type CreateRestrictedRatingDto = z.infer<typeof createRestrictedRatingDtoSchema>;
