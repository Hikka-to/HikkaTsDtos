/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface UpdateAnimeGroupDto extends ModelDto {
    name: string;
}

export const updateAnimeGroupDtoProperties: (keyof UpdateAnimeGroupDto)[] = [
    'name'
];

export const updateAnimeGroupDtoSchema = z.object({
    name: z.string().length(128),
    id: z.string().uuid().regex(/\S/)
});
