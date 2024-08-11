/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface UpdateAnimeVideoKindDto extends ModelDto {
    name: string;
}

export const updateAnimeVideoKindDtoProperties: (keyof UpdateAnimeVideoKindDto)[] = [
    'name'
];

export const updateAnimeVideoKindDtoSchema = z.object({
    name: z.string().length(156),
    id: z.string().uuid().regex(/\S/)
});
