/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface UpdateCommentReportDto extends ModelDto {
    commentId: string;
    userId: string;
    commentReportTypeId: string;
    body: string;
}

export const updateCommentReportDtoSchema = z.object({
    commentId: z.string().uuid(),
    userId: z.string().uuid(),
    commentReportTypeId: z.string().uuid(),
    body: z.string().length(2048).nullable(),
    id: z.string().uuid()
});
