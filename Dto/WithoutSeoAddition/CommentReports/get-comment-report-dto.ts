/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { getCommentDtoSchema } from '../Comments/get-comment-dto';
import { getCommentReportTypeDtoSchema } from '../CommentReportTypes/get-comment-report-type-dto';
import { getUserDtoSchema } from '../../Users/get-user-dto';
import { z } from 'zod';

export const getCommentReportDtoSchema = z.object({
	'comment': getCommentDtoSchema,
	'user': getUserDtoSchema,
	'commentReportType': getCommentReportTypeDtoSchema,
	'body': z.string().nullish(),
	'id': z.string().uuid().regex(/\S/)
});

export type GetCommentReportDto = z.infer<typeof getCommentReportDtoSchema>;
