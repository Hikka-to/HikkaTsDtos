/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export const createFormatDtoSchema = z.object({
    name: z.string().length(64),
    seoAddition: createSeoAdditionDtoSchema
});

export type CreateFormatDto = z.infer<typeof createFormatDtoSchema>;
