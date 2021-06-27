"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
class HttpClient {
    constructor(logger) {
        this._logger = logger;
    }
    print(printer) {
        this._logger.logDebug(printer);
    }
}
exports.HttpClient = HttpClient;
