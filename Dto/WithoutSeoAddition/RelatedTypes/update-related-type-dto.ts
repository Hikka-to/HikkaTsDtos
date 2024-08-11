/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface UpdateRelatedTypeDto extends ModelDto {
    name: string;
}

export const updateRelatedTypeDtoProperties: (keyof UpdateRelatedTypeDto)[] = [
    'name'
];

export const updateRelatedTypeDtoSchema = z.object({
    name: z.string().length(128),
    id: z.string().uuid().regex(/\S/)
});
