import { IHttpClient } from "../../Services/HttpClient/HttpClient";

export interface IFileApi {
    GetFiles(id: string): string;
}

export class FileApi implements IFileApi {

    private readonly _httpClient: IHttpClient;

    constructor(httpClient: IHttpClient) {
        this._httpClient = httpClient;
    }

    GetFiles(id: string): string {
        this._httpClient.print("Double Dependency");
        return `hello there ${id}`
    }

}