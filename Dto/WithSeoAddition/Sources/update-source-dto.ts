/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { UpdateDtoWithSeoAddition } from "../../../Shared/update-dto-with-seo-addition";import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export interface UpdateSourceDto extends UpdateDtoWithSeoAddition {
    name: string;
}

export const updateSourceDtoProperties: (keyof UpdateSourceDto)[] = [
    'name'
];

export const updateSourceDtoSchema = z.object({
    name: z.string().length(64),
    seoAddition: updateSeoAdditionDtoSchema,
    id: z.string().uuid().regex(/\S/)
});
