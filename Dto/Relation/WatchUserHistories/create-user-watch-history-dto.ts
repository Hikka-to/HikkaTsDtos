/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface CreateUserWatchHistoryDto {
    userId: string;
    episodeId: string;
    progressTime: number;
}

export const createUserWatchHistoryDtoProperties: (keyof CreateUserWatchHistoryDto)[] = [
    'userId',
    'episodeId',
    'progressTime'
];

export const createUserWatchHistoryDtoSchema = z.object({
    userId: z.string().uuid(),
    episodeId: z.string().uuid(),
    progressTime: z.number().int()
});
