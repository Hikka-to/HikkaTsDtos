/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { CreateDtoWithSeoAddition } from "../../../Shared/create-dto-with-seo-addition";import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export interface CreateStudioDto extends CreateDtoWithSeoAddition {
    name: string;
    logo: string;
}

export const createStudioDtoProperties: (keyof CreateStudioDto)[] = [
    'name',
    'logo'
];

export const createStudioDtoSchema = z.object({
    name: z.string().length(128),
    logo: z.string().nullable().length(2048),
    seoAddition: createSeoAdditionDtoSchema
});
