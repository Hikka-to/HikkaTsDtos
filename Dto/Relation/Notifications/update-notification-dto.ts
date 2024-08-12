/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface UpdateNotificationDto extends ModelDto {
    userId: string;
    animeId: string;
    resourceId: string;
}

export const updateNotificationDtoSchema = z.object({
    userId: z.string().uuid(),
    animeId: z.string().uuid(),
    resourceId: z.string().uuid(),
    id: z.string().uuid()
});
