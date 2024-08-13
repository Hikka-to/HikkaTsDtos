/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export const getStudioDtoSchema = z.object({
    name: z.string(),
    logo: z.string().nullable().optional(),
    seoAddition: getSeoAdditionDtoSchema,
    id: z.string().uuid()
});

export type GetStudioDto = z.infer<typeof getStudioDtoSchema>;
