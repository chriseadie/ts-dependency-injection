import { IHttpClient, SuperService } from './SuperService';
export class TestService implements SuperService {
    getData(): void {
        console.log("Method not implemented.");
    }

}

export class HttpClient implements IHttpClient {
    postData() {
        console.log("posting shit to an end point")
    }
}