/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "./model-dto";
import { UpdateSeoAdditionDto, updateSeoAdditionDtoSchema } from "../Dto/SeoAdditions/update-seo-addition-dto";import { z } from 'zod';

export interface UpdateDtoWithSeoAddition extends ModelDto {
    seoAddition: UpdateSeoAdditionDto;
}

export const updateDtoWithSeoAdditionProperties: (keyof UpdateDtoWithSeoAddition)[] = [
    'seoAddition'
];

export const updateDtoWithSeoAdditionSchema = z.object({
    seoAddition: updateSeoAdditionDtoSchema,
    id: z.string().uuid().regex(/\S/)
});
