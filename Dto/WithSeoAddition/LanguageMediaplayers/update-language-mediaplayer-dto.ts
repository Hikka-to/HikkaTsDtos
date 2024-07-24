/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { UpdateDtoWithSeoAddition } from "../../../Shared/update-dto-with-seo-addition";

export interface UpdateLanguageMediaplayerDto extends UpdateDtoWithSeoAddition {
    mediaplayerId: string;
    languageId: string;
    episodeId: string;
    formatId: string;
    url: string;
    fileId: string;
    startIntro: number;
    endIntro: number;
    startEnding: number;
    endEnding: number;
}
