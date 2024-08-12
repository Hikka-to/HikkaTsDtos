/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GetDtoWithSeoAddition } from "../../../Shared/get-dto-with-seo-addition";import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export interface GetDubDto extends GetDtoWithSeoAddition {
    name: string;
    icon: string;
}

export const getDubDtoSchema = z.object({
    name: z.string(),
    icon: z.string().nullable(),
    seoAddition: getSeoAdditionDtoSchema,
    id: z.string().uuid()
});
