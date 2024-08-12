/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "./model-dto";
import { GetSeoAdditionDto, getSeoAdditionDtoSchema } from "../Dto/SeoAdditions/get-seo-addition-dto";import { z } from 'zod';

export interface GetDtoWithSeoAddition extends ModelDto {
    seoAddition: GetSeoAdditionDto;
}

export const getDtoWithSeoAdditionSchema = z.object({
    seoAddition: getSeoAdditionDtoSchema,
    id: z.string().uuid()
});
