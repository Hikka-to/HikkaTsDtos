/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface CreateMediaplayerDto {
    name: string;
    icon: string;
}

export const createMediaplayerDtoProperties: (keyof CreateMediaplayerDto)[] = [
    'name',
    'icon'
];

export const createMediaplayerDtoSchema = z.object({
    name: z.string().length(128),
    icon: z.string().length(2048)
});
