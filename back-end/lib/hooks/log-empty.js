"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logEmpty = void 0;
const logEmpty = async (context) => {
    if (context.data.text.trim() === '') {
        throw new Error('Message text can not be empty');
    }
};
exports.logEmpty = logEmpty;
//# sourceMappingURL=log-empty.js.map