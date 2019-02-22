import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app.constants';
import { MessageDialogData } from '../models/messagedialogdata.model';
import { ServerMessage } from '../models/servermessage';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient, private constants: AppConstants) { }

  public Create(registerModel): Promise<MessageDialogData> {
    return this.httpClient.post
               (this.constants.BaseUrl + this.constants.RegisterUrl
               , registerModel)
               .toPromise()
               .then((result: ServerMessage) => new MessageDialogData(result.title, result.subtitle, result.text));
  }
}
