import { Engine } from "../Engine/Engine";

export class Car {
    private readonly _engine: Engine;
    constructor(engine: Engine) {
        this._engine = engine;
    }

    start() {
        if (this._engine) {
            this._engine.start();
        }
        console.log("Car has been started...");
    }
}