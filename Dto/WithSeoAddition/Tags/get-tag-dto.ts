/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export const getTagDtoSchema = z.object({
    name: z.string(),
    engName: z.string(),
    alises: z.array(z.string().nullish()),
    isCharacterTag: z.boolean(),
    isGenre: z.boolean(),
    parentTagId: z.string().uuid().nullish(),
    seoAddition: getSeoAdditionDtoSchema,
    id: z.string().uuid()
});

export type GetTagDto = z.infer<typeof getTagDtoSchema>;
