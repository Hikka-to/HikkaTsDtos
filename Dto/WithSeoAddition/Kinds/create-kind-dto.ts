/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export const createKindDtoSchema = z.object({
    slug: z.string().max(128).default(''),
    hint: z.string().max(64).default(''),
    seoAddition: createSeoAdditionDtoSchema.default(
        createSeoAdditionDtoSchema.parse({})
    )
});

export type CreateKindDto = z.infer<typeof createKindDtoSchema>;
