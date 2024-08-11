/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";
import { GetUserAnimeListTypeDto, getUserAnimeListTypeDtoSchema } from "../../WithoutSeoAddition/UserAnimeListTypes/get-user-anime-list-type-dto";
import { GetUserDto, getUserDtoSchema } from "../../Users/get-user-dto";
import { GetAnimeDto, getAnimeDtoSchema } from "../../WithSeoAddition/Animes/get-anime-dto";import { z } from 'zod';

export interface GetUserAnimeListDto extends ModelDto {
    userAnimeListType: GetUserAnimeListTypeDto;
    user: GetUserDto;
    anime: GetAnimeDto;
    isFavorite: boolean;
}

export const getUserAnimeListDtoProperties: (keyof GetUserAnimeListDto)[] = [
    'userAnimeListType',
    'user',
    'anime',
    'isFavorite'
];

export const getUserAnimeListDtoSchema = z.object({
    userAnimeListType: getUserAnimeListTypeDtoSchema,
    user: getUserDtoSchema,
    anime: getAnimeDtoSchema,
    isFavorite: z.boolean(),
    id: z.string().uuid().regex(/\S/)
});
