/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { UpdateDtoWithSeoAddition } from "../../../Shared/update-dto-with-seo-addition";import { updateSeoAdditionDtoSchema } from '../../SeoAdditions/update-seo-addition-dto';
import { z } from 'zod';

export interface UpdateCollectionDto extends UpdateDtoWithSeoAddition {
    name: string;
    description: string;
}

export const updateCollectionDtoSchema = z.object({
    name: z.string().length(64),
    description: z.string().length(256),
    seoAddition: updateSeoAdditionDtoSchema,
    id: z.string().uuid()
});
