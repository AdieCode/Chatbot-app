"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.TelegramBotService = void 0;
const knex_1 = require("@feathersjs/knex");
//bot id = 6906803387
//my id = 6665202902
//=============================================================================
//=============================================================================
// Import necessary modules
const startTelegramBot_1 = require("./bot/startTelegramBot");
const message_bot_1 = require("./message-bot/message-bot");
const bot = (0, startTelegramBot_1.startTelegramBot)();
//=============================================================================
//=============================================================================
let user_progress = {
    command: "",
    userInput: [""]
};
// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
class TelegramBotService extends knex_1.KnexService {
    async create(data, params) {
        //function for saving data
        async function saveData(text, id, is_bot, db, extra) {
            const currentTimestamp = Math.floor(Date.now() / 1000);
            try {
                await db('telegram-bot').insert({
                    text: text,
                    chat_id: id,
                    created_at: currentTimestamp + extra,
                    bot_sent: is_bot,
                    // Add other fields as needed based on your schema
                });
                return { success: true, message: 'Data inserted successfully' };
            }
            catch (error) {
                return { success: false, error: 'Failed to insert data' };
            }
        }
        const { userId, text } = data;
        const db = this.Model; // Access the Knex instance from the service Model
        try {
            const [response, updatedProgress] = (0, message_bot_1.myBot)(text, user_progress); // Access user_progress from the service instance
            user_progress = updatedProgress; // Update user_progress within the service instance
            // Save user message to the PostgreSQL database
            saveData(text, params.user?.id, false, db, 0);
            // Save user message to the PostgreSQL database
            saveData(response, params.user?.id, true, db, 1);
            //send data to client
            return { text: response };
        }
        catch (error) {
            // Handle errors failed to send message
            return { error: 'Failed to process the request' };
        }
    }
}
exports.TelegramBotService = TelegramBotService;
const getOptions = (app) => {
    return {
        paginate: app.get('paginate'),
        Model: app.get('postgresqlClient'),
        name: 'telegram-bot'
    };
};
exports.getOptions = getOptions;
//# sourceMappingURL=telegram-bot.class.js.map