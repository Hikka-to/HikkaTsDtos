/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface GetAnimeVideoDto extends ModelDto {
    animeVideoKindId: string;
    name: string;
    url: string;
    imageUrl: string;
    embedUrl: string;
}

export const getAnimeVideoDtoSchema = z.object({
    animeVideoKindId: z.string().uuid(),
    name: z.string(),
    url: z.string(),
    imageUrl: z.string(),
    embedUrl: z.string(),
    id: z.string().uuid()
});
