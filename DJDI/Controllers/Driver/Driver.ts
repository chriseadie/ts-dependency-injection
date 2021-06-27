import { Car } from "../Car/Car";

export class Driver {
    private readonly _car: Car;
    constructor(car: Car) {
        this._car = car;
    }

    drive() {
        if (this._car) {
            this._car.start();
        }
        console.log("driving car")
    }
}