"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(engine) {
        this._engine = engine;
    }
    start() {
        if (this._engine) {
            this._engine.start();
        }
        console.log("Car has been started...");
    }
}
exports.Car = Car;
