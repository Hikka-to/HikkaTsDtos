/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../Shared/model-dto";
import { GetUserSettingDto } from "../WithoutSeoAddition/UserSettings/get-user-setting-dto";

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
