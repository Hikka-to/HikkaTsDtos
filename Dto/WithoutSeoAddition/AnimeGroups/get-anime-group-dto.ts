/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface GetAnimeGroupDto extends ModelDto {
    name: string;
}

export const getAnimeGroupDtoProperties: (keyof GetAnimeGroupDto)[] = [
    'name'
];

export const getAnimeGroupDtoSchema = z.object({
    name: z.string(),
    id: z.string().uuid().regex(/\S/)
});
