/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { UpdateDtoWithSeoAddition } from "../../../Shared/update-dto-with-seo-addition";import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export interface UpdateRestrictedRatingDto extends UpdateDtoWithSeoAddition {
    name: string;
    value: number;
    hint: string;
    icon: string;
}

export const updateRestrictedRatingDtoProperties: (keyof UpdateRestrictedRatingDto)[] = [
    'name',
    'value',
    'hint',
    'icon'
];

export const updateRestrictedRatingDtoSchema = z.object({
    name: z.string().length(10),
    value: z.number().int(),
    hint: z.string().length(64),
    icon: z.string().nullable().length(128),
    seoAddition: updateSeoAdditionDtoSchema,
    id: z.string().uuid().regex(/\S/)
});
