"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const FileApi_1 = require("../Controllers/FileApi/FileApi");
const HttpClient_1 = require("../Services/HttpClient/HttpClient");
const DependencyInjectionService_1 = __importDefault(require("../DIService/DependencyInjectionService"));
const Logger_1 = require("../Services/Logger/Logger");
const Engine_1 = require("../Controllers/Engine/Engine");
const Car_1 = require("../Controllers/Car/Car");
const Driver_1 = require("../Controllers/Driver/Driver");
function register() {
    DependencyInjectionService_1.default.AddService("fileApi", FileApi_1.FileApi)
        .AddService("httpClient", HttpClient_1.HttpClient)
        .AddService("logger", Logger_1.Logger)
        .AddService("engine", Engine_1.Engine)
        .AddService("car", Car_1.Car)
        .AddService("driver", Driver_1.Driver);
}
exports.register = register;
