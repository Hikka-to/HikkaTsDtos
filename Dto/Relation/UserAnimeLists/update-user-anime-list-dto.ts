/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';


export const updateUserAnimeListDtoSchema = z.object({
    userId: z.string().uuid(),
    animeId: z.string().uuid(),
    isFavorite: z.boolean(),
    id: z.string().uuid()
});

export type UpdateUserAnimeListDto = z.infer<typeof updateUserAnimeListDtoSchema>;
