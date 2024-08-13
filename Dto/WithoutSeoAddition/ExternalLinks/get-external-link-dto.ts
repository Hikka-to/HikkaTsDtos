/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const getExternalLinkDtoSchema = z.object({
    animeId: z.string().uuid(),
    url: z.string(),
    id: z.string().uuid()
});

export type GetExternalLinkDto = z.infer<typeof getExternalLinkDtoSchema>;
