import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

    constructor(private http: Http) { }

    getAuthtenticate() {
        var headers = new Headers();
        this.createAuthorizationHeader(headers);

        return this.http.get('/api/data/authenticate', { headers: headers })
            .toPromise().then(res => res.json())
            .catch(this.handleError);
    }

    getAuthorize() {
        var headers = new Headers();
        this.createAuthorizationHeader(headers);

        return this.http.get('/api/data/authorize', { headers: headers })
            .toPromise().then(res => res.json())
            .catch(this.handleError);
    }

    private createAuthorizationHeader(headers: Headers) {
        const token = localStorage.getItem('access_token');
        headers.append('Authorization', 'Bearer ' + token);
    }

    private handleError(error: any): Promise<any> {
        const body = JSON.parse(error._body);
        return Promise.reject(body.Message);
    }
}