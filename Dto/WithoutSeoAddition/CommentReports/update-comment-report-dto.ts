/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const updateCommentReportDtoSchema = z.object({
	'commentId': z.string().uuid(),
	'userId': z.string().uuid(),
	'commentReportTypeId': z.string().uuid(),
	'body': z.string().max(2048).nullish(),
	'id': z.string().uuid().regex(/\S/)
});

export type UpdateCommentReportDto = z.infer<typeof updateCommentReportDtoSchema>;
