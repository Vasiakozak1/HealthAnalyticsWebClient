import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app.constants';
import { LoginResult } from '../models/loginresult';
import { Router } from '@angular/router';
import { AuthUserData } from '../models/authuserdata';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public constructor(private http: HttpClient
        , private constants: AppConstants) {}

    public Login(email: string, password: string): Promise<any> {
        const requestBody = {
            email,
            password
        };
        return this.http.post(this.constants.BaseUrl + this.constants.LoginUrl, requestBody)
                        .toPromise()
                        .then((result: LoginResult) => {
                            this.saveLoginData(result);
                            window.location.replace('/home');
                        })
                        .catch(error => console.log(error));
    }

    public IsAuthenticated(): boolean {
        const authToken = sessionStorage.getItem(AppConstants.AuthTokenKey);
        return authToken == null || authToken === '' ? false : true;
    }

    public GetUserToken(): string {
        return sessionStorage.getItem(AppConstants.AuthTokenKey);
    }
    public GetAuthUserData(): AuthUserData {
        const email = localStorage.getItem(AppConstants.EmailKey);
        const firstName = localStorage.getItem(AppConstants.FirstNameKey);
        const lastName = localStorage.getItem(AppConstants.LastNameKey);
        return new AuthUserData(email, firstName, lastName);
    }


    private saveLoginData(loginData: LoginResult): void {
        localStorage.setItem(AppConstants.FirstNameKey, loginData.firstName);
        localStorage.setItem(AppConstants.LastNameKey, loginData.lastName);
        localStorage.setItem(AppConstants.EmailKey, loginData.email);
        sessionStorage.setItem(AppConstants.AuthTokenKey, loginData.token);
    }
}
