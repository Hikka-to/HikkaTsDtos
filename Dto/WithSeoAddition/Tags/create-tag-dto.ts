/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { CreateDtoWithSeoAddition } from "../../../Shared/create-dto-with-seo-addition";import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export interface CreateTagDto extends CreateDtoWithSeoAddition {
    name: string;
    engName: string;
    alises: string[];
    isGenre: boolean;
    parentTagId: string;
}

export const createTagDtoProperties: (keyof CreateTagDto)[] = [
    'name',
    'engName',
    'alises',
    'isGenre',
    'parentTagId'
];

export const createTagDtoSchema = z.object({
    name: z.string().length(64),
    engName: z.string().length(64),
    alises: z.array(z.string()),
    isGenre: z.boolean(),
    parentTagId: z.string().uuid().nullable(),
    seoAddition: createSeoAdditionDtoSchema
});
