import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { TelegramBot, TelegramBotData, TelegramBotPatch, TelegramBotQuery, TelegramBotService } from './telegram-bot.class';
export type { TelegramBot, TelegramBotData, TelegramBotPatch, TelegramBotQuery };
export type TelegramBotClientService = Pick<TelegramBotService<Params<TelegramBotQuery>>, (typeof telegramBotMethods)[number]>;
export declare const telegramBotPath = "telegram-bot";
export declare const telegramBotMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const telegramBotClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [telegramBotPath]: TelegramBotClientService;
    }
}
