/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { CreateDtoWithSeoAddition } from "../../../Shared/create-dto-with-seo-addition";import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export interface CreateSourceDto extends CreateDtoWithSeoAddition {
    name: string;
}

export const createSourceDtoProperties: (keyof CreateSourceDto)[] = [
    'name'
];

export const createSourceDtoSchema = z.object({
    name: z.string().length(64),
    seoAddition: createSeoAdditionDtoSchema
});
