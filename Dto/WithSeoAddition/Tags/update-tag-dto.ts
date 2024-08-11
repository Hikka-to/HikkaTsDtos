/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { UpdateDtoWithSeoAddition } from "../../../Shared/update-dto-with-seo-addition";import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export interface UpdateTagDto extends UpdateDtoWithSeoAddition {
    name: string;
    engName: string;
    alises: string[];
    isGenre: boolean;
    parentTagId: string;
}

export const updateTagDtoProperties: (keyof UpdateTagDto)[] = [
    'name',
    'engName',
    'alises',
    'isGenre',
    'parentTagId'
];

export const updateTagDtoSchema = z.object({
    name: z.string().length(64),
    engName: z.string().length(64),
    alises: z.array(z.string()),
    isGenre: z.boolean(),
    parentTagId: z.string().uuid().nullable(),
    seoAddition: updateSeoAdditionDtoSchema,
    id: z.string().uuid().regex(/\S/)
});
