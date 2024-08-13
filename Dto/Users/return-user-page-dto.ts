/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */

import { getUserDtoSchema } from "./get-user-dto";import { z } from 'zod';

export const returnUserPageDtoSchema = z.object({
    models: z.array(getUserDtoSchema),
    howManyPages: z.number().int()
});
