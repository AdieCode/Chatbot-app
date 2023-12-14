"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramBot = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
const authentication_1 = require("@feathersjs/authentication");
const schema_1 = require("@feathersjs/schema");
const telegram_bot_schema_1 = require("./telegram-bot.schema");
const telegram_bot_class_1 = require("./telegram-bot.class");
const telegram_bot_shared_1 = require("./telegram-bot.shared");
__exportStar(require("./telegram-bot.class"), exports);
__exportStar(require("./telegram-bot.schema"), exports);
// A configure function that registers the service and its hooks via `app.configure`
const telegramBot = (app) => {
    // Register our service on the Feathers application
    app.use(telegram_bot_shared_1.telegramBotPath, new telegram_bot_class_1.TelegramBotService((0, telegram_bot_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: telegram_bot_shared_1.telegramBotMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(telegram_bot_shared_1.telegramBotPath).hooks({
        around: {
            all: [
                (0, authentication_1.authenticate)('jwt'),
                schema_1.hooks.resolveExternal(telegram_bot_schema_1.telegramBotExternalResolver),
                schema_1.hooks.resolveResult(telegram_bot_schema_1.telegramBotResolver)
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(telegram_bot_schema_1.telegramBotQueryValidator),
                schema_1.hooks.resolveQuery(telegram_bot_schema_1.telegramBotQueryResolver)
            ],
            find: [],
            get: [],
            create: [
                schema_1.hooks.validateData(telegram_bot_schema_1.telegramBotDataValidator),
                schema_1.hooks.resolveData(telegram_bot_schema_1.telegramBotDataResolver)
            ],
            patch: [
                schema_1.hooks.validateData(telegram_bot_schema_1.telegramBotPatchValidator),
                schema_1.hooks.resolveData(telegram_bot_schema_1.telegramBotPatchResolver)
            ],
            remove: []
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.telegramBot = telegramBot;
//# sourceMappingURL=telegram-bot.js.map