/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const createUserAnimeListDtoSchema = z.object({
    userAnimeListTypeId: z.string().uuid(),
    isFavorite: z.boolean()
});
