/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";
import { GetUserDto, getUserDtoSchema } from "../../Users/get-user-dto";
import { GetAnimeDto, getAnimeDtoSchema } from "../../WithSeoAddition/Animes/get-anime-dto";import { z } from 'zod';

export interface GetUserRecommendationDto extends ModelDto {
    user: GetUserDto;
    anime: GetAnimeDto;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

export const getUserRecommendationDtoProperties: (keyof GetUserRecommendationDto)[] = [
    'user',
    'anime',
    'description',
    'createdAt',
    'updatedAt'
];

export const getUserRecommendationDtoSchema = z.object({
    user: getUserDtoSchema,
    anime: getAnimeDtoSchema,
    description: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    id: z.string().uuid().regex(/\S/)
});
