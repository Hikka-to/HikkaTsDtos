/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { getUserSettingDtoSchema } from "../WithoutSeoAddition/UserSettings/get-user-setting-dto";import { z } from 'zod';

export const getUserDtoSchema = z.object({
    userSetting: getUserSettingDtoSchema,
    email: z.string(),
    roles: z.array(z.string()),
    name: z.string(),
    avatarUrl: z.string().nullish(),
    backdropUrl: z.string().nullish(),
    description: z.string().nullish(),
    statusText: z.string().nullish(),
    statusIcon: z.string(),
    allowAdult: z.boolean(),
    lastSeenAt: z.date(),
    updatedAt: z.date(),
    createdAt: z.date(),
    id: z.string().uuid()
});

export type GetUserDto = z.infer<typeof getUserDtoSchema>;
