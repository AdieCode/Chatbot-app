"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramBotClient = exports.telegramBotMethods = exports.telegramBotPath = void 0;
exports.telegramBotPath = 'telegram-bot';
exports.telegramBotMethods = ['find', 'get', 'create', 'patch', 'remove'];
const telegramBotClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.telegramBotPath, connection.service(exports.telegramBotPath), {
        methods: exports.telegramBotMethods
    });
};
exports.telegramBotClient = telegramBotClient;
//# sourceMappingURL=telegram-bot.shared.js.map