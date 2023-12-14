"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramBotQueryResolver = exports.telegramBotQueryValidator = exports.telegramBotQuerySchema = exports.telegramBotQueryProperties = exports.telegramBotPatchResolver = exports.telegramBotPatchValidator = exports.telegramBotPatchSchema = exports.telegramBotDataResolver = exports.telegramBotDataValidator = exports.telegramBotDataSchema = exports.telegramBotExternalResolver = exports.telegramBotResolver = exports.telegramBotValidator = exports.telegramBotSchema = void 0;
// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const validators_1 = require("../../validators");
// Main data model schema
exports.telegramBotSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    userId: typebox_1.Type.String(),
    text: typebox_1.Type.String(),
    created_at: typebox_1.Type.Optional(typebox_1.Type.String()),
    chat_id: typebox_1.Type.Optional(typebox_1.Type.String()),
}, { $id: 'TelegramBot', additionalProperties: false });
exports.telegramBotValidator = (0, typebox_1.getValidator)(exports.telegramBotSchema, validators_1.dataValidator);
exports.telegramBotResolver = (0, schema_1.resolve)({});
exports.telegramBotExternalResolver = (0, schema_1.resolve)({});
// Schema for creating new entries
exports.telegramBotDataSchema = typebox_1.Type.Pick(exports.telegramBotSchema, ['text', 'userId'], {
    $id: 'TelegramBotData'
});
exports.telegramBotDataValidator = (0, typebox_1.getValidator)(exports.telegramBotDataSchema, validators_1.dataValidator);
exports.telegramBotDataResolver = (0, schema_1.resolve)({});
// Schema for updating existing entries
exports.telegramBotPatchSchema = typebox_1.Type.Partial(exports.telegramBotSchema, {
    $id: 'TelegramBotPatch'
});
exports.telegramBotPatchValidator = (0, typebox_1.getValidator)(exports.telegramBotPatchSchema, validators_1.dataValidator);
exports.telegramBotPatchResolver = (0, schema_1.resolve)({});
// Schema for allowed query properties
exports.telegramBotQueryProperties = typebox_1.Type.Pick(exports.telegramBotSchema, ['id', 'text', 'created_at', 'chat_id']);
exports.telegramBotQuerySchema = typebox_1.Type.Intersect([
    (0, typebox_1.querySyntax)(exports.telegramBotQueryProperties),
    // Add additional query properties here
    typebox_1.Type.Object({}, { additionalProperties: false })
], { additionalProperties: false });
exports.telegramBotQueryValidator = (0, typebox_1.getValidator)(exports.telegramBotQuerySchema, validators_1.queryValidator);
exports.telegramBotQueryResolver = (0, schema_1.resolve)({});
//# sourceMappingURL=telegram-bot.schema.js.map