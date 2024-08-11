/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface CreateSeasonDto {
    animeId: string;
    animeGroupId: string;
    name: string;
}

export const createSeasonDtoProperties: (keyof CreateSeasonDto)[] = [
    'animeId',
    'animeGroupId',
    'name'
];

export const createSeasonDtoSchema = z.object({
    animeId: z.string().uuid(),
    animeGroupId: z.string().uuid(),
    name: z.string()
});
