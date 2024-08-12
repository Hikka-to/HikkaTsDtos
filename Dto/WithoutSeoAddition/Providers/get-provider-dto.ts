/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";
import { GetAnimeDto, getAnimeDtoSchema } from "../../WithSeoAddition/Animes/get-anime-dto";import { z } from 'zod';

export interface GetProviderDto extends ModelDto {
    anime: GetAnimeDto;
    logoPath: string;
    name: string;
    priority: number;
}

export const getProviderDtoSchema = z.object({
    anime: getAnimeDtoSchema,
    logoPath: z.string(),
    name: z.string(),
    priority: z.number().int(),
    id: z.string().uuid()
});
