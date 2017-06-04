import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
    constructor(private http: Http) { }

    getToken(username: string, password: string) {
        const body = `username=${username}&password=${password}&grant_type=password`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('/token', body, { headers: headers })
            .toPromise().then(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        const body = JSON.parse(error._body);
        return Promise.reject(body.error_description);
    }
}