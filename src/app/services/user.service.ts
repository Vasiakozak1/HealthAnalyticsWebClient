import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app.constants';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public constructor(private http: HttpClient, private constants: AppConstants) {}

    public Login(email: string, password: string): Promise<any> {
        const requestBody = {
            email,
            password
        };
        return this.http.post(this.constants.BaseUrl + this.constants.LoginUrl, requestBody)
                        .toPromise()
                        .then(result => console.log(result))
                        .catch(error => console.log(error));
    }
}
