/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface CreateExternalLinkDto {
    animeId: string;
    url: string;
}

export const createExternalLinkDtoSchema = z.object({
    animeId: z.string().uuid(),
    url: z.string().length(2048)
});
