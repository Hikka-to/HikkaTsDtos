/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface UpdateAnimeVideoDto extends ModelDto {
    animeVideoKindId: string;
    name: string;
    url: string;
    imageUrl: string;
    embedUrl: string;
}

export const updateAnimeVideoDtoProperties: (keyof UpdateAnimeVideoDto)[] = [
    'animeVideoKindId',
    'name',
    'url',
    'imageUrl',
    'embedUrl'
];

export const updateAnimeVideoDtoSchema = z.object({
    animeVideoKindId: z.string().uuid(),
    name: z.string().length(156),
    url: z.string().length(2048),
    imageUrl: z.string().length(2048),
    embedUrl: z.string().length(2048),
    id: z.string().uuid().regex(/\S/)
});
