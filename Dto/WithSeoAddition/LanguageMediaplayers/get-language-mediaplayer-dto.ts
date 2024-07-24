/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GetDtoWithSeoAddition } from "../../../Shared/get-dto-with-seo-addition";
import { GetMediaplayerDto } from "../../WithoutSeoAddition/Mediaplayers/get-mediaplayer-dto";
import { GetLanguageDto } from "../Languages/get-language-dto";
import { GetEpisodeDto } from "../Episodes/get-episode-dto";
import { GetFormatDto } from "../Formats/get-format-dto";

export interface GetLanguageMediaplayerDto extends GetDtoWithSeoAddition {
    mediaplayer: GetMediaplayerDto;
    language: GetLanguageDto;
    episode: GetEpisodeDto;
    format: GetFormatDto;
    url: string;
    fileId: string;
    startIntro: number;
    endIntro: number;
    startEnding: number;
    endEnding: number;
}
