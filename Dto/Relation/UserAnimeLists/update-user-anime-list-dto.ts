/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface UpdateUserAnimeListDto extends ModelDto {
    userId: string;
    animeId: string;
    isFavorite: boolean;
}

export const updateUserAnimeListDtoSchema = z.object({
    userId: z.string().uuid(),
    animeId: z.string().uuid(),
    isFavorite: z.boolean(),
    id: z.string().uuid()
});
