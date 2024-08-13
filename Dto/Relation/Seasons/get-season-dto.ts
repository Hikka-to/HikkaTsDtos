/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { getAnimeDtoSchema } from "../../WithSeoAddition/Animes/get-anime-dto";
import { getAnimeGroupDtoSchema } from "../../WithoutSeoAddition/AnimeGroups/get-anime-group-dto";import { z } from 'zod';

export const getSeasonDtoSchema = z.object({
    anime: getAnimeDtoSchema,
    animeGroup: getAnimeGroupDtoSchema,
    name: z.string(),
    id: z.string().uuid()
});
