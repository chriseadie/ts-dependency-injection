
export interface ILogger {
    logDebug(value: string): void;
}

export class Logger implements ILogger {
    logDebug(value: string) {
        console.log(value)
    }
}