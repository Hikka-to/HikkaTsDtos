/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface CreateAnimeVideoKindDto {
    name: string;
}

export const createAnimeVideoKindDtoSchema = z.object({
    name: z.string().length(156)
});
