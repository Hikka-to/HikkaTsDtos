/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export const getUserSettingDtoSchema = z.object({
    isAutoNext: z.boolean(),
    isAutoPlay: z.boolean(),
    isAutoSkipIntro: z.boolean(),
    isDub: z.boolean(),
    isRomaji: z.boolean(),
    isPrivateAnimeList: z.boolean(),
    id: z.string().uuid()
});
