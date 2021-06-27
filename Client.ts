import { injectable, inject } from 'tsyringe';
import { IHttpClient, SuperService } from './SuperService';

@injectable()
export class Client {
    private readonly _service: SuperService;
    private readonly _httpClient: IHttpClient;
    constructor(
        @inject("SuperService") public service: SuperService,
        @inject("HttpClient") public HttpClient: IHttpClient
    ) {
        this._service = service;
        this._httpClient = HttpClient;
    }
    hello() {
        this._service.getData();
    }
    fetchShit() {
        this._httpClient.postData();
    }
}