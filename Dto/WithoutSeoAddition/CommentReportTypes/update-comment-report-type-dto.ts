/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface UpdateCommentReportTypeDto extends ModelDto {
    slug: string;
}

export const updateCommentReportTypeDtoSchema = z.object({
    slug: z.string().length(128),
    id: z.string().uuid()
});
