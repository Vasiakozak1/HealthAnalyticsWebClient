import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app.constants';
import { MessageDialogData } from '../models/messagedialogdata.model';
import { ServerMessage } from '../models/servermessage';
import { DialogService } from './dialog.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient
    , private constants: AppConstants
    , private dialogService: DialogService
    , private router: Router) { }

  public Create(registerModel): Promise<MessageDialogData> {
    return this.httpClient.post
               (this.constants.BaseUrl + this.constants.RegisterUrl
               , registerModel)
               .toPromise()
               .then((result: ServerMessage) => new MessageDialogData(result.title, result.subtitle, result.text));
  }

  public ConfirmEmail(email: string, token: string) {
    this.constants.SettingsLoaded.subscribe(loaded => {
      this.httpClient.post
      (this.constants.BaseUrl + this.constants.ConfirmEmailUrl
      , {email, token})
      .toPromise()
      .then((result: ServerMessage) => new MessageDialogData(result.title, result.subtitle, result.text))
      .then(messageData => this.dialogService.OpenMessageDialog(messageData)
            .subscribe(() => this.router.navigate(['/home'])));
    });

  }

}
