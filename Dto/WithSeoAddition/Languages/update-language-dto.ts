/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { UpdateDtoWithSeoAddition } from "../../../Shared/update-dto-with-seo-addition";import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export interface UpdateLanguageDto extends UpdateDtoWithSeoAddition {
    name: string;
    locale: string;
    icon: string;
}

export const updateLanguageDtoProperties: (keyof UpdateLanguageDto)[] = [
    'name',
    'locale',
    'icon'
];

export const updateLanguageDtoSchema = z.object({
    name: z.string().length(64),
    locale: z.string().length(2),
    icon: z.string().length(2048),
    seoAddition: updateSeoAdditionDtoSchema,
    id: z.string().uuid().regex(/\S/)
});
