"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
class Driver {
    constructor(car) {
        this._car = car;
    }
    drive() {
        if (this._car) {
            this._car.start();
        }
        console.log("driving car");
    }
}
exports.Driver = Driver;
