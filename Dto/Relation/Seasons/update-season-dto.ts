/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface UpdateSeasonDto extends ModelDto {
    animeId: string;
    animeGroupId: string;
    name: string;
}

export const updateSeasonDtoSchema = z.object({
    animeId: z.string().uuid(),
    animeGroupId: z.string().uuid(),
    name: z.string(),
    id: z.string().uuid()
});
