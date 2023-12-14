import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../declarations';
import type { TelegramBot, TelegramBotData, TelegramBotPatch, TelegramBotQuery } from './telegram-bot.schema';
export type { TelegramBot, TelegramBotData, TelegramBotPatch, TelegramBotQuery };
export interface TelegramBotParams extends KnexAdapterParams<TelegramBotQuery> {
}
export declare class TelegramBotService<ServiceParams extends Params = TelegramBotParams> extends KnexService<TelegramBot, TelegramBotData, TelegramBotParams, TelegramBotPatch> {
    create(data: any, params?: any): Promise<any>;
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
