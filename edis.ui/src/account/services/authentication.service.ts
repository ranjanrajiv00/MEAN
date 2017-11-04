import { Injectable, EventEmitter } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { AuthenticationModel } from './../model/authentication.model';
import { ResponseModel } from './../../shared/model/response.model';
import { HttpService } from './../../shared/services/http.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthenticationService {
    public onAuthenticated: EventEmitter<boolean>;

    constructor(private http: HttpService) {
        this.onAuthenticated = new EventEmitter<boolean>();
    }

    authenticate(user: any): Observable<ResponseModel<AuthenticationModel>> {
        return this.http.post('account/authenticate', user)
            .map((response: Response) => {
                this.onAuthenticated.emit(true);
                return <ResponseModel<AuthenticationModel>>response.json();
            });
    }

    isAuthenticated() {
        var user = <AuthenticationModel>JSON.parse(localStorage.getItem('user'));
        if (user && user.token) {
            return true;
        }
        return false;
    }
}