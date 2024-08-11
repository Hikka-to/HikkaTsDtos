/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { CreateSeoAdditionDto, createSeoAdditionDtoSchema } from "../Dto/SeoAdditions/create-seo-addition-dto";import { z } from 'zod';

export interface CreateDtoWithSeoAddition {
    seoAddition: CreateSeoAdditionDto;
}

export const createDtoWithSeoAdditionProperties: (keyof CreateDtoWithSeoAddition)[] = [
    'seoAddition'
];

export const createDtoWithSeoAdditionSchema = z.object({
    seoAddition: createSeoAdditionDtoSchema
});
