/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GetDtoWithSeoAddition } from "../../../Shared/get-dto-with-seo-addition";

export interface GetEpisodeDto extends GetDtoWithSeoAddition {
    animeId: string;
    name: string;
    duration: number;
    airDate: Date;
    isFiller: boolean;
    updateAt: Date;
    createAt: Date;
}
