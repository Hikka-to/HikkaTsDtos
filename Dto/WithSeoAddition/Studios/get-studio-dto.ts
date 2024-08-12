/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GetDtoWithSeoAddition } from "../../../Shared/get-dto-with-seo-addition";import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export interface GetStudioDto extends GetDtoWithSeoAddition {
    name: string;
    logo: string;
}

export const getStudioDtoSchema = z.object({
    name: z.string(),
    logo: z.string().nullable(),
    seoAddition: getSeoAdditionDtoSchema,
    id: z.string().uuid()
});
