/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GetDtoWithSeoAddition } from "../../../Shared/get-dto-with-seo-addition";import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export interface GetCollectionDto extends GetDtoWithSeoAddition {
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

export const getCollectionDtoProperties: (keyof GetCollectionDto)[] = [
    'name',
    'description',
    'createdAt',
    'updatedAt'
];

export const getCollectionDtoSchema = z.object({
    name: z.string(),
    description: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    seoAddition: getSeoAdditionDtoSchema,
    id: z.string().uuid().regex(/\S/)
});
