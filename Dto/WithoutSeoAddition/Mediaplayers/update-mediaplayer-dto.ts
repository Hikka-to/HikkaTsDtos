/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface UpdateMediaplayerDto extends ModelDto {
    name: string;
    icon: string;
}

export const updateMediaplayerDtoSchema = z.object({
    name: z.string().length(128),
    icon: z.string().length(2048),
    id: z.string().uuid()
});
