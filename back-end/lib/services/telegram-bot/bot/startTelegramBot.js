"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startTelegramBot = void 0;
const telegraf_1 = require("telegraf");
const filters_1 = require("telegraf/filters");
const message_bot_1 = require("../message-bot/message-bot");
let user_progress = {
    command: "",
    userInput: [""]
};
function startTelegramBot() {
    const bot = new telegraf_1.Telegraf("6906803387:AAH5gBHzb_NRwXIFgVqX9EiLUy1z_9rhKoQ");
    // Handle incoming messages
    bot.on((0, filters_1.message)('text'), async (ctx) => {
        // Explicit usage
        const user_text = ctx.message.text;
        const [response, updatedProgress] = (0, message_bot_1.myBot)(user_text, user_progress);
        user_progress = updatedProgress;
        await ctx.reply(response);
    });
    bot.launch();
    return bot;
}
exports.startTelegramBot = startTelegramBot;
//# sourceMappingURL=startTelegramBot.js.map