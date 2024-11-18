/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { z } from 'zod';

export const createAnimeGroupDtoSchema = z.object({ 'name': z.string().max(128) });

export type CreateAnimeGroupDto = z.infer<typeof createAnimeGroupDtoSchema>;
