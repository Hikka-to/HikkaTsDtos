/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { CreateDtoWithSeoAddition } from "../../../Shared/create-dto-with-seo-addition";import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export interface CreateDubDto extends CreateDtoWithSeoAddition {
    name: string;
    icon: string;
}

export const createDubDtoSchema = z.object({
    name: z.string().length(128),
    icon: z.string().length(2048).nullable(),
    seoAddition: createSeoAdditionDtoSchema
});
