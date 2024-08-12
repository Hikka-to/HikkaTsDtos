/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GetDtoWithSeoAddition } from "../../../Shared/get-dto-with-seo-addition";import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export interface GetLanguageDto extends GetDtoWithSeoAddition {
    name: string;
    locale: string;
    icon: string;
}

export const getLanguageDtoSchema = z.object({
    name: z.string(),
    locale: z.string(),
    icon: z.string(),
    seoAddition: getSeoAdditionDtoSchema,
    id: z.string().uuid()
});
