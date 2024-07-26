/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";
import { GetUserAnimeListTypeDto } from "../../WithoutSeoAddition/UserAnimeListTypes/get-user-anime-list-type-dto";
import { GetUserDto } from "../../Users/get-user-dto";
import { GetAnimeDto } from "../../WithSeoAddition/Animes/get-anime-dto";

export interface GetUserAnimeListDto extends ModelDto {
    userAnimeListType: GetUserAnimeListTypeDto;
    user: GetUserDto;
    anime: GetAnimeDto;
    isFavorite: boolean;
}
