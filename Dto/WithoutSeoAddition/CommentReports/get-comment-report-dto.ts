/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";
import { GetCommentDto, getCommentDtoSchema } from "../Comments/get-comment-dto";
import { GetUserDto, getUserDtoSchema } from "../../Users/get-user-dto";
import { GetCommentReportTypeDto, getCommentReportTypeDtoSchema } from "../CommentReportTypes/get-comment-report-type-dto";import { z } from 'zod';

export interface GetCommentReportDto extends ModelDto {
    comment: GetCommentDto;
    user: GetUserDto;
    commentReportType: GetCommentReportTypeDto;
    body: string;
}

export const getCommentReportDtoSchema = z.object({
    comment: getCommentDtoSchema,
    user: getUserDtoSchema,
    commentReportType: getCommentReportTypeDtoSchema,
    body: z.string().nullable(),
    id: z.string().uuid()
});
