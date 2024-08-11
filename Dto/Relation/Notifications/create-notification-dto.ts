/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface CreateNotificationDto {
    userId: string;
    animeId: string;
    resourceId: string;
}

export const createNotificationDtoProperties: (keyof CreateNotificationDto)[] = [
    'userId',
    'animeId',
    'resourceId'
];

export const createNotificationDtoSchema = z.object({
    userId: z.string().uuid(),
    animeId: z.string().uuid(),
    resourceId: z.string().uuid()
});
