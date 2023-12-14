// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  telegramBotDataValidator,
  telegramBotPatchValidator,
  telegramBotQueryValidator,
  telegramBotResolver,
  telegramBotExternalResolver,
  telegramBotDataResolver,
  telegramBotPatchResolver,
  telegramBotQueryResolver
} from './telegram-bot.schema'

import type { Application } from '../../declarations'
import { TelegramBotService, getOptions } from './telegram-bot.class'
import { telegramBotPath, telegramBotMethods } from './telegram-bot.shared'

export * from './telegram-bot.class'
export * from './telegram-bot.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const telegramBot = (app: Application) => {
  // Register our service on the Feathers application
  app.use(telegramBotPath, new TelegramBotService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: telegramBotMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(telegramBotPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(telegramBotExternalResolver),
        schemaHooks.resolveResult(telegramBotResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(telegramBotQueryValidator),
        schemaHooks.resolveQuery(telegramBotQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(telegramBotDataValidator),
        schemaHooks.resolveData(telegramBotDataResolver)
      ],
      patch: [
        schemaHooks.validateData(telegramBotPatchValidator),
        schemaHooks.resolveData(telegramBotPatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [telegramBotPath]: TelegramBotService
  }
}
