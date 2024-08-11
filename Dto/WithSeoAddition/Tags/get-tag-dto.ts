/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GetDtoWithSeoAddition } from "../../../Shared/get-dto-with-seo-addition";import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export interface GetTagDto extends GetDtoWithSeoAddition {
    name: string;
    engName: string;
    alises: string[];
    isGenre: boolean;
    parentTagId: string;
}

export const getTagDtoProperties: (keyof GetTagDto)[] = [
    'name',
    'engName',
    'alises',
    'isGenre',
    'parentTagId'
];

export const getTagDtoSchema = z.object({
    name: z.string(),
    engName: z.string(),
    alises: z.array(z.string()),
    isGenre: z.boolean(),
    parentTagId: z.string().uuid().nullable(),
    seoAddition: getSeoAdditionDtoSchema,
    id: z.string().uuid().regex(/\S/)
});
