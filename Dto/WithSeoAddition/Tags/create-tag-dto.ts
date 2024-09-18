/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export const createTagDtoSchema = z.object({
    name: z.string().length(64),
    engName: z.string().length(64),
    alises: z.array(z.string()),
    isCharacterTag: z.boolean(),
    isGenre: z.boolean(),
    parentTagId: z.string().uuid().nullish(),
    seoAddition: createSeoAdditionDtoSchema
});

export type CreateTagDto = z.infer<typeof createTagDtoSchema>;
