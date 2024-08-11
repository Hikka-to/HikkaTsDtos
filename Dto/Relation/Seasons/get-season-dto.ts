/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";
import { GetAnimeDto, getAnimeDtoSchema } from "../../WithSeoAddition/Animes/get-anime-dto";
import { GetAnimeGroupDto, getAnimeGroupDtoSchema } from "../../WithoutSeoAddition/AnimeGroups/get-anime-group-dto";import { z } from 'zod';

export interface GetSeasonDto extends ModelDto {
    anime: GetAnimeDto;
    animeGroup: GetAnimeGroupDto;
    name: string;
}

export const getSeasonDtoProperties: (keyof GetSeasonDto)[] = [
    'anime',
    'animeGroup',
    'name'
];

export const getSeasonDtoSchema = z.object({
    anime: getAnimeDtoSchema,
    animeGroup: getAnimeGroupDtoSchema,
    name: z.string(),
    id: z.string().uuid().regex(/\S/)
});
