/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const createUserWatchHistoryDtoSchema = z.object({
    userId: z.string().uuid(),
    episodeId: z.string().uuid(),
    progressTime: z.number().int()
});

export type CreateUserWatchHistoryDto = z.infer<typeof createUserWatchHistoryDtoSchema>;
