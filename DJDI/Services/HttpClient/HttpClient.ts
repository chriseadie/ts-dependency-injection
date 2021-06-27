import { ILogger } from "../Logger/Logger";

export interface IHttpClient {
    print(value: string): void;
}

export class HttpClient {
    private readonly _logger: ILogger;
    constructor(logger: ILogger) {
        this._logger = logger;
    }
    print(printer: string) {
        this._logger.logDebug(printer);
    }
}