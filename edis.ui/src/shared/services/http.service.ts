import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthenticationModel } from './../../account/model/authentication.model'

@Injectable()
export class HttpService extends Http {
    baseUrl: string = 'http://localhost:3030/';
    constructor(private backend: XHRBackend, options: RequestOptions) {
        super(backend, options);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(this.baseUrl + url, this.getRequestOptionArgs(options));
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(this.baseUrl + url, body, this.getRequestOptionArgs(options));
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(this.baseUrl + url, body, this.getRequestOptionArgs(options));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(this.baseUrl + url, this.getRequestOptionArgs(options));
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('content-type', 'application/json');

        let user = <AuthenticationModel>JSON.parse(localStorage.getItem('user'));
        if (user)
            options.headers.append('x-access-token', user.token);

        return options;
    }
}