/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { getUserDtoSchema } from "../../Users/get-user-dto";
import { getEpisodeDtoSchema } from "../../WithSeoAddition/Episodes/get-episode-dto";import { z } from 'zod';

export const getUserWatchHistoryDtoSchema = z.object({
    user: getUserDtoSchema,
    episode: getEpisodeDtoSchema,
    progressTime: z.number().int(),
    updatedAt: z.date(),
    createdAt: z.date(),
    id: z.string().uuid()
});
