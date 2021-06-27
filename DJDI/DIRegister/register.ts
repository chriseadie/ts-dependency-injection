
import { FileApi } from '../Controllers/FileApi/FileApi';
import { HttpClient } from '../Services/HttpClient/HttpClient';
import di from '../DIService/DependencyInjectionService';
import { Logger } from '../Services/Logger/Logger';
import { Engine } from '../Controllers/Engine/Engine';
import { Car } from '../Controllers/Car/Car';
import { Driver } from '../Controllers/Driver/Driver';

export function register() {
    di.AddService("fileApi", FileApi)
        .AddService("httpClient", HttpClient)
        .AddService("logger", Logger)
        .AddService("engine", Engine)
        .AddService("car", Car)
        .AddService("driver", Driver);
}