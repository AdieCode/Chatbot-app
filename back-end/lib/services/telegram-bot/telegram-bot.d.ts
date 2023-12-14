import type { Application } from '../../declarations';
import { TelegramBotService } from './telegram-bot.class';
import { telegramBotPath } from './telegram-bot.shared';
export * from './telegram-bot.class';
export * from './telegram-bot.schema';
export declare const telegramBot: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [telegramBotPath]: TelegramBotService;
    }
}
