/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export const updateRestrictedRatingDtoSchema = z.object({
    name: z.string().max(10),
    value: z.number().int(),
    hint: z.string().max(64),
    icon: z.string().max(128).nullish(),
    seoAddition: updateSeoAdditionDtoSchema,
    id: z.string().uuid()
});

export type UpdateRestrictedRatingDto = z.infer<typeof updateRestrictedRatingDtoSchema>;
