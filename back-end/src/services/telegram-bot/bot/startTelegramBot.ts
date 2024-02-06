import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters'
import {myBot} from '../message-bot/message-bot'

import dotenv from 'dotenv';
dotenv.config();
const apiKey = process.env.API_KEY;
if (!apiKey) {
  throw new Error('API key not found in environment variables');
}

let user_progress = {
  command: "",
  userInput: [""]
}


export function startTelegramBot() {
  const bot = new Telegraf(apiKey);

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