/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";

export interface GetEpisodeImageDto extends ModelDto {
    episodeId: string;
    imageUrl: string;
    width: number;
    height: number;
    colors: number[];
}
