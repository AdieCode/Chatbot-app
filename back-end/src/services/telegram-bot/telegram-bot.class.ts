// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { TelegramBot, TelegramBotData, TelegramBotPatch, TelegramBotQuery } from './telegram-bot.schema'

export type { TelegramBot, TelegramBotData, TelegramBotPatch, TelegramBotQuery }

export interface TelegramBotParams extends KnexAdapterParams<TelegramBotQuery> {}



//bot id = 6906803387
//my id = 6665202902
//=============================================================================
//=============================================================================
// Import necessary modules
import {startTelegramBot} from './bot/startTelegramBot'
import {myBot} from './message-bot/message-bot'
import { Knex } from 'knex'
const bot = startTelegramBot()
//=============================================================================
//=============================================================================


let user_progress = {
  command: "",
  userInput: [""]
}


// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class TelegramBotService<ServiceParams extends Params = TelegramBotParams> extends KnexService<TelegramBot,TelegramBotData,TelegramBotParams,TelegramBotPatch> {
  
  
  
  
  
  async create(data: any, params?: any): Promise<any> {
    
    //function for saving data
    async function saveData(text:string ,id:number,is_bot:boolean,db:any,extra:number){
      const currentTimestamp = Math.floor(Date.now() / 1000);
      try{
        await db('telegram-bot').insert({
                text: text,
                chat_id: id,
                created_at: currentTimestamp + extra,
                bot_sent: is_bot,
                // Add other fields as needed based on your schema
        });
        return { success: true, message: 'Data inserted successfully' };
      } catch (error) {
        return { success: false, error: 'Failed to insert data' };
      }
    }

    const { userId, text } = data;
    const db = this.Model as Knex; // Access the Knex instance from the service Model
    try {

      const [response, updatedProgress] = myBot(text, user_progress); // Access user_progress from the service instance
      user_progress = updatedProgress; // Update user_progress within the service instance

      // Save user message to the PostgreSQL database
      saveData(text,params.user?.id,false,db,0)
      // Save user message to the PostgreSQL database
      saveData(response,params.user?.id,true,db,1)

      //send data to client
      return { text: response };
    } catch (error) {
      // Handle errors failed to send message
      return { error: 'Failed to process the request' };
    }
  }
}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'telegram-bot'
  }
}
