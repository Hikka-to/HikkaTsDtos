/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export const getDubDtoSchema = z.object({
    name: z.string(),
    icon: z.string().nullish(),
    seoAddition: getSeoAdditionDtoSchema,
    id: z.string().uuid()
});

export type GetDubDto = z.infer<typeof getDubDtoSchema>;
