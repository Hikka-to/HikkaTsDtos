/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface GetCommentReportTypeDto extends ModelDto {
    slug: string;
}

export const getCommentReportTypeDtoProperties: (keyof GetCommentReportTypeDto)[] = [
    'slug'
];

export const getCommentReportTypeDtoSchema = z.object({
    slug: z.string(),
    id: z.string().uuid().regex(/\S/)
});
