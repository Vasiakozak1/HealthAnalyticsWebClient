import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppConstants {
    public BaseUrl: string;
    public RegisterUrl: string;
    public LoginUrl: string;
    public constructor(private httpClient: HttpClient) {
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
            });
    }
}
