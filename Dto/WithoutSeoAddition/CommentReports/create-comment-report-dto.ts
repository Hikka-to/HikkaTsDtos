/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface CreateCommentReportDto {
    commentId: string;
    userId: string;
    commentReportTypeId: string;
    body: string;
}

export const createCommentReportDtoProperties: (keyof CreateCommentReportDto)[] = [
    'commentId',
    'userId',
    'commentReportTypeId',
    'body'
];

export const createCommentReportDtoSchema = z.object({
    commentId: z.string().uuid(),
    userId: z.string().uuid(),
    commentReportTypeId: z.string().uuid(),
    body: z.string().nullable().length(2048)
});
