/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export const createSourceDtoSchema = z.object({
    name: z.string().length(64),
    seoAddition: createSeoAdditionDtoSchema
});
