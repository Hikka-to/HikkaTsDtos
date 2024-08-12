/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GetDtoWithSeoAddition } from "../../../Shared/get-dto-with-seo-addition";import { getSeoAdditionDtoSchema } from '../../SeoAdditions/get-seo-addition-dto';
import { z } from 'zod';

export interface GetStatusDto extends GetDtoWithSeoAddition {
    name: string;
}

export const getStatusDtoSchema = z.object({
    name: z.string(),
    seoAddition: getSeoAdditionDtoSchema,
    id: z.string().uuid()
});
