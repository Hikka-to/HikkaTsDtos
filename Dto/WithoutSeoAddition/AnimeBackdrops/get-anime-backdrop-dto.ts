/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface GetAnimeBackdropDto extends ModelDto {
    animeId: string;
    imageUrl: string;
    width: number;
    height: number;
    colors: number[];
}

export const getAnimeBackdropDtoSchema = z.object({
    animeId: z.string().uuid(),
    imageUrl: z.string(),
    width: z.number().int(),
    height: z.number().int(),
    colors: z.array(z.number().int().min(-2147483648).max(2147483647)),
    id: z.string().uuid()
});
