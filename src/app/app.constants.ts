import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class AppConstants {

    public static FirstNameKey = 'firstName';
    public static LastNameKey = 'lastName';
    public static EmailKey = 'email';
    public static AuthTokenKey = 'authToken';

    public BaseUrl: string;
    public RegisterUrl: string;
    public LoginUrl: string;
    public ConfirmEmailUrl: string;

    public SettingsLoaded: Subject<boolean>;
    public constructor(private httpClient: HttpClient) {
        this.SettingsLoaded = new Subject<boolean>();
        this.getSettings();
    }

    private getSettings() {
        this.httpClient.get<any>('assets/settings.json')
            .toPromise()
            .then(settingsJson => {
                const apiUrlsNames = Object.keys(settingsJson.ApiUrls);
                apiUrlsNames.forEach(element => {
                    this[element] = settingsJson.ApiUrls[element];
                });
            })
            .then(() => this.SettingsLoaded.next(true));
    }
}
