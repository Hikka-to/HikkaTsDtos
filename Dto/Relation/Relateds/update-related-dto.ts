/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateRelatedDtoSchema = z.object({
    animeId: z.string().uuid(),
    animeGroupId: z.string().uuid(),
    relatedTypeId: z.string().uuid(),
    id: z.string().uuid()
});

export type UpdateRelatedDto = z.infer<typeof updateRelatedDtoSchema>;
