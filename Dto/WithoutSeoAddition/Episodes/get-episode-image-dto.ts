/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface GetEpisodeImageDto extends ModelDto {
    episodeId: string;
    imageUrl: string;
    width: number;
    height: number;
    colors: number[];
}

export const getEpisodeImageDtoProperties: (keyof GetEpisodeImageDto)[] = [
    'episodeId',
    'imageUrl',
    'width',
    'height',
    'colors'
];

export const getEpisodeImageDtoSchema = z.object({
    episodeId: z.string().uuid(),
    imageUrl: z.string(),
    width: z.number().int(),
    height: z.number().int(),
    colors: z.array(z.number().int()),
    id: z.string().uuid().regex(/\S/)
});
