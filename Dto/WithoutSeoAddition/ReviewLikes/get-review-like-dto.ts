/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";
import { GetReviewDto, getReviewDtoSchema } from "../Reviews/get-review-dto";
import { GetUserDto, getUserDtoSchema } from "../../Users/get-user-dto";import { z } from 'zod';

export interface GetReviewLikeDto extends ModelDto {
    review: GetReviewDto;
    user: GetUserDto;
    isLiked: boolean;
}

export const getReviewLikeDtoProperties: (keyof GetReviewLikeDto)[] = [
    'review',
    'user',
    'isLiked'
];

export const getReviewLikeDtoSchema = z.object({
    review: getReviewDtoSchema,
    user: getUserDtoSchema,
    isLiked: z.boolean(),
    id: z.string().uuid().regex(/\S/)
});
