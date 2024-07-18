/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";
import { GetAnimeDto } from "../../WithSeoAddition/Animes/get-anime-dto";
import { GetAnimeGroupDto } from "../../WithoutSeoAddition/AnimeGroups/get-anime-group-dto";

export interface GetSeasonDto extends ModelDto {
    anime: GetAnimeDto;
    animeGroup: GetAnimeGroupDto;
    name: string;
}
