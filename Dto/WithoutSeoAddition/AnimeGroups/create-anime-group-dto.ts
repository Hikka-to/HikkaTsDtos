/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface CreateAnimeGroupDto {
    name: string;
}

export const createAnimeGroupDtoProperties: (keyof CreateAnimeGroupDto)[] = [
    'name'
];

export const createAnimeGroupDtoSchema = z.object({
    name: z.string().length(128)
});
