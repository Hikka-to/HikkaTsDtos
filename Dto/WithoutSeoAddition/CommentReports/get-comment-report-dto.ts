/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";
import { GetCommentDto } from "../Comments/get-comment-dto";
import { GetUserDto } from "../../Users/get-user-dto";
import { GetCommentReportTypeDto } from "../CommentReportTypes/get-comment-report-type-dto";

export interface GetCommentReportDto extends ModelDto {
    comment: GetCommentDto;
    user: GetUserDto;
    commentReportType: GetCommentReportTypeDto;
    body: string;
}
