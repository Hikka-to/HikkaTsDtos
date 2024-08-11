/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { ModelDto } from "../../../Shared/model-dto";import { z } from 'zod';

export interface GetUserSettingDto extends ModelDto {
    isAutoNext: boolean;
    isAutoPlay: boolean;
    isAutoSkipIntro: boolean;
    isDub: boolean;
    isRomaji: boolean;
    isPrivateAnimeList: boolean;
}

export const getUserSettingDtoProperties: (keyof GetUserSettingDto)[] = [
    'isAutoNext',
    'isAutoPlay',
    'isAutoSkipIntro',
    'isDub',
    'isRomaji',
    'isPrivateAnimeList'
];

export const getUserSettingDtoSchema = z.object({
    isAutoNext: z.boolean(),
    isAutoPlay: z.boolean(),
    isAutoSkipIntro: z.boolean(),
    isDub: z.boolean(),
    isRomaji: z.boolean(),
    isPrivateAnimeList: z.boolean(),
    id: z.string().uuid().regex(/\S/)
});
