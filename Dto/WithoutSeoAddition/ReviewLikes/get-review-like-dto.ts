/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { GetReviewDto } from "../Reviews/get-review-dto";
import { GetUserDto } from "../../Users/get-user-dto";

export interface GetReviewLikeDto {
    review: GetReviewDto;
    user: GetUserDto;
    isLiked: boolean;
}
