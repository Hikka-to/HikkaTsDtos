/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";

export interface UpdateCommentReportDto extends ModelDto {
    commentId: string;
    userId: string;
    commentReportTypeId: string;
    body: string;
}
