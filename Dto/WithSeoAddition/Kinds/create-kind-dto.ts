/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { CreateDtoWithSeoAddition } from "../../../Shared/create-dto-with-seo-addition";import { createSeoAdditionDtoSchema } from '../../SeoAdditions/create-seo-addition-dto';
import { z } from 'zod';

export interface CreateKindDto extends CreateDtoWithSeoAddition {
    slug: string;
    hint: string;
}

export const createKindDtoSchema = z.object({
    slug: z.string().length(128),
    hint: z.string().length(64),
    seoAddition: createSeoAdditionDtoSchema
});
