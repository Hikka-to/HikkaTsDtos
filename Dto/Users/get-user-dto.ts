/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../Shared/model-dto";
import { GetUserSettingDto, getUserSettingDtoSchema } from "../WithoutSeoAddition/UserSettings/get-user-setting-dto";import { z } from 'zod';

export interface GetUserDto extends ModelDto {
    userSetting: GetUserSettingDto;
    email: string;
    roles: string[];
    name: string;
    avatarUrl: string;
    backdropUrl: string;
    description: string;
    statusText: string;
    statusIcon: string;
    allowAdult: boolean;
    lastSeenAt: Date;
    updatedAt: Date;
    createdAt: Date;
}

export const getUserDtoProperties: (keyof GetUserDto)[] = [
    'userSetting',
    'email',
    'roles',
    'name',
    'avatarUrl',
    'backdropUrl',
    'description',
    'statusText',
    'statusIcon',
    'allowAdult',
    'lastSeenAt',
    'updatedAt',
    'createdAt'
];

export const getUserDtoSchema = z.object({
    userSetting: getUserSettingDtoSchema,
    email: z.string(),
    roles: z.array(z.string()),
    name: z.string(),
    avatarUrl: z.string().nullable(),
    backdropUrl: z.string().nullable(),
    description: z.string().nullable(),
    statusText: z.string().nullable(),
    statusIcon: z.string(),
    allowAdult: z.boolean(),
    lastSeenAt: z.date(),
    updatedAt: z.date(),
    createdAt: z.date(),
    id: z.string().uuid().regex(/\S/)
});
