/**
 * This is a TypeGen auto-generated file.
 * Any changes made to this file can be lost when this file is regenerated.
 */
import { z } from 'zod';

export enum SortOrder {
    Asc = 0,
    Desc = 1,
}

export const sortOrderKeys = Object.keys(SortOrder) as [keyof typeof SortOrder]

export const sortOrderSchema = z.enum(sortOrderKeys)
