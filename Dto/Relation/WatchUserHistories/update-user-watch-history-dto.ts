/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateUserWatchHistoryDtoSchema = z.object({
    userId: z.string().uuid(),
    episodeId: z.string().uuid(),
    progressTime: z.number().int(),
    id: z.string().uuid()
});
