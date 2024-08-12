/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";
import { GetUserDto, getUserDtoSchema } from "../../Users/get-user-dto";
import { GetEpisodeDto, getEpisodeDtoSchema } from "../../WithSeoAddition/Episodes/get-episode-dto";import { z } from 'zod';

export interface GetUserWatchHistoryDto extends ModelDto {
    user: GetUserDto;
    episode: GetEpisodeDto;
    progressTime: number;
    updatedAt: Date;
    createdAt: Date;
}

export const getUserWatchHistoryDtoSchema = z.object({
    user: getUserDtoSchema,
    episode: getEpisodeDtoSchema,
    progressTime: z.number().int(),
    updatedAt: z.date(),
    createdAt: z.date(),
    id: z.string().uuid()
});
