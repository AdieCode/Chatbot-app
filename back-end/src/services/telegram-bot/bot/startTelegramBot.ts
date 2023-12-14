import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters'
import {myBot} from '../message-bot/message-bot'

let user_progress = {
  command: "",
  userInput: [""]
}

export function startTelegramBot() {
  const bot = new Telegraf("6906803387:AAH5gBHzb_NRwXIFgVqX9EiLUy1z_9rhKoQ");

  // Handle incoming messages
  bot.on(message('text'), async (ctx) => {
    // Explicit usage
    const user_text = ctx.message.text
    const [response, updatedProgress] = myBot(user_text, user_progress); 
    user_progress = updatedProgress; 
    
    await ctx.reply(response)
  })

  bot.launch();

  return bot; 
}