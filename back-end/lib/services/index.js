"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const telegram_bot_1 = require("./telegram-bot/telegram-bot");
const messages_1 = require("./messages/messages");
const users_1 = require("./users/users");
const services = (app) => {
    app.configure(telegram_bot_1.telegramBot);
    app.configure(messages_1.message);
    app.configure(users_1.user);
    // All services will be registered here
};
exports.services = services;
//# sourceMappingURL=index.js.map