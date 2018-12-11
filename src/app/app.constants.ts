import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppConstants {
    public BaseUrl: string;
    public RegisterUrl: string;
    public constructor(private httpClient: Http) {
        this.getSettings();
    }

    private getSettings() {
        console.log('get sett');
        this.httpClient.get('assets/settings.json')
            .toPromise()
            .then(settings => settings.json())
            .then(settingsJson => {
                const apiUrlsNames = Object.keys(settingsJson.ApiUrls);
                apiUrlsNames.forEach(element => {
                    this[element] = settingsJson.ApiUrls[element];
                });
            });
    }
}
