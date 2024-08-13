/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export const createCountryDtoSchema = z.object({
    name: z.string().length(64),
    icon: z.string().length(2048),
    seoAddition: createSeoAdditionDtoSchema
});
