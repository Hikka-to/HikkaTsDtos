/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateSeasonDtoSchema = z.object({
    animeId: z.string().uuid(),
    animeGroupId: z.string().uuid(),
    name: z.string(),
    id: z.string().uuid()
});

export type UpdateSeasonDto = z.infer<typeof updateSeasonDtoSchema>;
