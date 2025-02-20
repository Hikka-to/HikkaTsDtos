/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export const createCountryDtoSchema = z.object({
    name: z.string().max(64).default(''),
    icon: z.string().max(2048).default(''),
    seoAddition: createSeoAdditionDtoSchema.default(
        createSeoAdditionDtoSchema.parse({})
    )
});

export type CreateCountryDto = z.infer<typeof createCountryDtoSchema>;
