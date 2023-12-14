// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type {
  TelegramBot,
  TelegramBotData,
  TelegramBotPatch,
  TelegramBotQuery,
  TelegramBotService
} from './telegram-bot.class'

export type { TelegramBot, TelegramBotData, TelegramBotPatch, TelegramBotQuery }

export type TelegramBotClientService = Pick<
  TelegramBotService<Params<TelegramBotQuery>>,
  (typeof telegramBotMethods)[number]
>

export const telegramBotPath = 'telegram-bot'

export const telegramBotMethods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const telegramBotClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(telegramBotPath, connection.service(telegramBotPath), {
    methods: telegramBotMethods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [telegramBotPath]: TelegramBotClientService
  }
}
