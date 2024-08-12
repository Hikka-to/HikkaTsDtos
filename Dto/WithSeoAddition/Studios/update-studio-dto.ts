/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { UpdateDtoWithSeoAddition } from "../../../Shared/update-dto-with-seo-addition";import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export interface UpdateStudioDto extends UpdateDtoWithSeoAddition {
    name: string;
    logo: string;
}

export const updateStudioDtoSchema = z.object({
    name: z.string().length(128),
    logo: z.string().length(2048).nullable(),
    seoAddition: updateSeoAdditionDtoSchema,
    id: z.string().uuid()
});
