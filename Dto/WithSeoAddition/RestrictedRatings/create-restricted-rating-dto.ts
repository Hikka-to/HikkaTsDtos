/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export const createRestrictedRatingDtoSchema = z.object({
    name: z.string().max(10).default(""),
    value: z.number().int().default(0),
    hint: z.string().max(64).default(""),
    icon: z.string().max(128).nullish().default(""),
    seoAddition: createSeoAdditionDtoSchema.default(
        createSeoAdditionDtoSchema.parse({})
    )
});

export type CreateRestrictedRatingDto = z.infer<typeof createRestrictedRatingDtoSchema>;
