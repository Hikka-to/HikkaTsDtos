/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";
import { GetUserDto } from "../../Users/get-user-dto";
import { GetEpisodeDto } from "../../WithSeoAddition/Episodes/get-episode-dto";

export interface GetUserWatchHistoryDto extends ModelDto {
    user: GetUserDto;
    episode: GetEpisodeDto;
    progressTime: number;
    updatedAt: Date;
    createdAt: Date;
}
