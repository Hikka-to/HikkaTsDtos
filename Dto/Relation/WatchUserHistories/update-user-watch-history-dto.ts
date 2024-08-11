/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface UpdateUserWatchHistoryDto extends ModelDto {
    userId: string;
    episodeId: string;
    progressTime: number;
}

export const updateUserWatchHistoryDtoProperties: (keyof UpdateUserWatchHistoryDto)[] = [
    'userId',
    'episodeId',
    'progressTime'
];

export const updateUserWatchHistoryDtoSchema = z.object({
    userId: z.string().uuid(),
    episodeId: z.string().uuid(),
    progressTime: z.number().int(),
    id: z.string().uuid().regex(/\S/)
});
