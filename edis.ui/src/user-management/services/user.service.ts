import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './../../shared/services/http.service';
import { UserModel } from './../model/user.model'

@Injectable()
export class UserService {
    constructor(private http: HttpService) {

    }

    get() {
        return this.http.get('users')
            .map((response: Response) => {
                return response.json();
            });
    }

    getById(id: string) {
        return this.http.get('users/' + id)
            .map((response: Response) => {
                return response.json();
            });
    }

    save(user: UserModel) {
        if (user._id) {
            return this.http.put('users/', user)
                .map((response: Response) => {
                    return response.json();
                });
        }
        else {
            return this.http.post('users/', user)
                .map((response: Response) => {
                    return response.json();
                });
        }
    }

    remove(id: string) {
        return this.http.delete('users/' + id)
            .map((response: Response) => {
                return response.json();
            });
    }
}