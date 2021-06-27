"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = require("./DIRegister/register");
const DependencyInjectionService_1 = __importDefault(require("./DIService/DependencyInjectionService"));
register_1.register();
var driver = DependencyInjectionService_1.default.GetService("driver");
driver.drive();
