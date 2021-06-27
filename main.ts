import 'reflect-metadata';
import { Client } from './Client';
import { HttpClient, TestService } from './TestService';
import { container } from 'tsyringe';

container.register("SuperService", {
    useClass: TestService
});
container.register("HttpClient", {
    useClass: HttpClient
})
const client = container.resolve(Client)
client.hello()
client.fetchShit();