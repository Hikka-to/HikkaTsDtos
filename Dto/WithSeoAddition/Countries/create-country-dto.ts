/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { CreateDtoWithSeoAddition } from "../../../Shared/create-dto-with-seo-addition";import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export interface CreateCountryDto extends CreateDtoWithSeoAddition {
    name: string;
    icon: string;
}

export const createCountryDtoProperties: (keyof CreateCountryDto)[] = [
    'name',
    'icon'
];

export const createCountryDtoSchema = z.object({
    name: z.string().length(64),
    icon: z.string().length(2048),
    seoAddition: createSeoAdditionDtoSchema
});
