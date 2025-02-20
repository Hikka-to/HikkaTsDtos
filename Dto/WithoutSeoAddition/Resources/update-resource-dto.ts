/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateResourceDtoSchema = z.object({
    slug: z.string().length(128),
    id: z.string().uuid()
});

export type UpdateResourceDto = z.infer<typeof updateResourceDtoSchema>;
