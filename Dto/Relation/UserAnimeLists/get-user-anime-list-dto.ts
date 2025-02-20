/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { getUserAnimeListTypeDtoSchema } from "../../WithoutSeoAddition/UserAnimeListTypes/get-user-anime-list-type-dto";
import { getUserDtoSchema } from "../../Users/get-user-dto";
import { getAnimeDtoSchema } from "../../WithSeoAddition/Animes/get-anime-dto";import { z } from 'zod';

export const getUserAnimeListDtoSchema = z.object({
    userAnimeListType: getUserAnimeListTypeDtoSchema,
    user: getUserDtoSchema,
    anime: getAnimeDtoSchema,
    isFavorite: z.boolean(),
    id: z.string().uuid()
});

export type GetUserAnimeListDto = z.infer<typeof getUserAnimeListDtoSchema>;
