/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ReturnPageDto } from "../../Shared/return-page-dto";
import { GetUserDto, getUserDtoSchema } from "./get-user-dto";import { z } from 'zod';

export interface ReturnUserPageDto extends ReturnPageDto<GetUserDto> {

}

export const returnUserPageDtoProperties: (keyof ReturnUserPageDto)[] = [
];

export const returnUserPageDtoSchema = z.object({
    models: z.array(getUserDtoSchema),
    howManyPages: z.number().int()
});
