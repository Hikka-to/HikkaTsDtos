/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";
import { GetAnimeDto } from "../../WithSeoAddition/Animes/get-anime-dto";

export interface GetProviderDto extends ModelDto {
    anime: GetAnimeDto;
    logoPath: string;
    name: string;
    priority: number;
}
