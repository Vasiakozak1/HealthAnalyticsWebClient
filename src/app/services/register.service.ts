import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConstants } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: Http, private constants: AppConstants) { }

  public Create(fields) {
  }
}
