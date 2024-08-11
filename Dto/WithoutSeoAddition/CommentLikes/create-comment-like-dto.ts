/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export interface CreateCommentLikeDto {
    commentId: string;
    userId: string;
    isLiked: boolean;
}

export const createCommentLikeDtoProperties: (keyof CreateCommentLikeDto)[] = [
    'commentId',
    'userId',
    'isLiked'
];

export const createCommentLikeDtoSchema = z.object({
    commentId: z.string().uuid(),
    userId: z.string().uuid(),
    isLiked: z.boolean()
});
