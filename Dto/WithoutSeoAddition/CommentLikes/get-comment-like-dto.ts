/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface GetCommentLikeDto extends ModelDto {
    commentId: string;
    userId: string;
    isLiked: boolean;
}

export const getCommentLikeDtoProperties: (keyof GetCommentLikeDto)[] = [
    'commentId',
    'userId',
    'isLiked'
];

export const getCommentLikeDtoSchema = z.object({
    commentId: z.string().uuid(),
    userId: z.string().uuid(),
    isLiked: z.boolean(),
    id: z.string().uuid().regex(/\S/)
});
