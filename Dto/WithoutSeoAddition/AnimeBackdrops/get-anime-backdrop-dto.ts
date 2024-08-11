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

export const getAnimeBackdropDtoProperties: (keyof GetAnimeBackdropDto)[] = [
    'animeId',
    'imageUrl',
    'width',
    'height',
    'colors'
];

export const getAnimeBackdropDtoSchema = z.object({
    animeId: z.string().uuid(),
    imageUrl: z.string(),
    width: z.number().int(),
    height: z.number().int(),
    colors: z.array(z.number().int()),
    id: z.string().uuid().regex(/\S/)
});
