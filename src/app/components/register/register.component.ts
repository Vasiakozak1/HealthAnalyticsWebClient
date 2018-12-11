import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PasswordRepeatErrorStateMatcher, checkPasswords } from '../../services/helpers/validators';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public RegisterForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]{2,32}')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]{2,32}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)]),
    passwordRepeat: new FormControl('')
  }, { validators: checkPasswords });
  public ErrorMatcher = new PasswordRepeatErrorStateMatcher();
  public EarliestDate = new Date(1900, 1, 1);
  public LatestDate = new Date();

  constructor(private RegisterService: RegisterService) { }

  ngOnInit() {
  }

  public SubmitRegister() {
    this.RegisterService.Create(this.RegisterForm.controls);
  }
}
