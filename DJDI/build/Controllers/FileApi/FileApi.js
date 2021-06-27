"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileApi = void 0;
class FileApi {
    constructor(httpClient) {
        this._httpClient = httpClient;
    }
    GetFiles(id) {
        this._httpClient.print("Double Dependency");
        return `hello there ${id}`;
    }
}
exports.FileApi = FileApi;
