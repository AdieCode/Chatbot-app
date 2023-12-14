// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { TelegramBotService } from './telegram-bot.class'

// Main data model schema
export const telegramBotSchema = Type.Object(
  {
    id: Type.Number(),
    userId: Type.String(),
    text: Type.String(),
    created_at: Type.Optional(Type.String()),
    chat_id: Type.Optional(Type.String()),
  },
  { $id: 'TelegramBot', additionalProperties: false }
)
export type TelegramBot = Static<typeof telegramBotSchema>
export const telegramBotValidator = getValidator(telegramBotSchema, dataValidator)
export const telegramBotResolver = resolve<TelegramBot, HookContext<TelegramBotService>>({})

export const telegramBotExternalResolver = resolve<TelegramBot, HookContext<TelegramBotService>>({})

// Schema for creating new entries
export const telegramBotDataSchema = Type.Pick(telegramBotSchema, [ 'text', 'userId'], {
  $id: 'TelegramBotData'
})
export type TelegramBotData = Static<typeof telegramBotDataSchema>
export const telegramBotDataValidator = getValidator(telegramBotDataSchema, dataValidator)
export const telegramBotDataResolver = resolve<TelegramBot, HookContext<TelegramBotService>>({})

// Schema for updating existing entries
export const telegramBotPatchSchema = Type.Partial(telegramBotSchema, {
  $id: 'TelegramBotPatch'
})
export type TelegramBotPatch = Static<typeof telegramBotPatchSchema>
export const telegramBotPatchValidator = getValidator(telegramBotPatchSchema, dataValidator)
export const telegramBotPatchResolver = resolve<TelegramBot, HookContext<TelegramBotService>>({})

// Schema for allowed query properties
export const telegramBotQueryProperties = Type.Pick(telegramBotSchema, ['id', 'text','created_at','chat_id'])
export const telegramBotQuerySchema = Type.Intersect(
  [
    querySyntax(telegramBotQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type TelegramBotQuery = Static<typeof telegramBotQuerySchema>
export const telegramBotQueryValidator = getValidator(telegramBotQuerySchema, queryValidator)
export const telegramBotQueryResolver = resolve<TelegramBotQuery, HookContext<TelegramBotService>>({})
