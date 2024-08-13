/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export const updateTagDtoSchema = z.object({
    name: z.string().length(64),
    engName: z.string().length(64),
    alises: z.array(z.string()),
    isGenre: z.boolean(),
    parentTagId: z.string().uuid().nullable().optional(),
    seoAddition: updateSeoAdditionDtoSchema,
    id: z.string().uuid()
});

export type UpdateTagDto = z.infer<typeof updateTagDtoSchema>;
