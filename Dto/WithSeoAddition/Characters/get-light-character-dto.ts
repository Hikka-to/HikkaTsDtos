/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { getTagDtoSchema } from "../Tags/get-tag-dto";import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export const getLightCharacterDtoSchema = z.object({
    name: z.string().nullish(),
    romajiName: z.string(),
    nativeName: z.string(),
    alternativeName: z.string().nullish(),
    tags: z.array(getTagDtoSchema.nullish()),
    imageUrl: z.string(),
    description: z.string().nullish(),
    updatedAt: z.date(),
    createdAt: z.date(),
    seoAddition: getSeoAdditionDtoSchema,
    id: z.string().uuid()
});

export type GetLightCharacterDto = z.infer<typeof getLightCharacterDtoSchema>;
