/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface CreateResourceDto {
    slug: string;
}

export const createResourceDtoProperties: (keyof CreateResourceDto)[] = [
    'slug'
];

export const createResourceDtoSchema = z.object({
    slug: z.string().length(128)
});
