/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';


export const updateAnimeVideoKindDtoSchema = z.object({
    name: z.string().length(156),
    id: z.string().uuid()
});

export type UpdateAnimeVideoKindDto = z.infer<typeof updateAnimeVideoKindDtoSchema>;
