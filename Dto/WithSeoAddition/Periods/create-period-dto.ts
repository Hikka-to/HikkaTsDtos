/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export const createPeriodDtoSchema = z.object({
    name: z.string().length(24),
    seoAddition: createSeoAdditionDtoSchema
});

export type CreatePeriodDto = z.infer<typeof createPeriodDtoSchema>;
