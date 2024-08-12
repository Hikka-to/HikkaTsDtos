/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GetDtoWithSeoAddition } from "../../../Shared/get-dto-with-seo-addition";import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export interface GetKindDto extends GetDtoWithSeoAddition {
    slug: string;
    hint: string;
}

export const getKindDtoSchema = z.object({
    slug: z.string(),
    hint: z.string(),
    seoAddition: getSeoAdditionDtoSchema,
    id: z.string().uuid()
});
