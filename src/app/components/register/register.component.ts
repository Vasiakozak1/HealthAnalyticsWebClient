import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PasswordRepeatErrorStateMatcher, checkPasswords } from '../../services/helpers/validators';
import { RegisterService } from '../../services/register.service';
import { DialogService } from '../../services/dialog.service';

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
  public Registrated = false;
  public HidePassword = true;
  public ErrorMatcher = new PasswordRepeatErrorStateMatcher();
  public EarliestDate = new Date(1900, 1, 1);
  public LatestDate = new Date();

  constructor(private registerService: RegisterService,
              private dialogService: DialogService,
              private router: Router) { }

  ngOnInit() {
    this.Registrated = localStorage.getItem('registrated') === 'true';
  }

  public SubmitRegister() {
    const fields = this.RegisterForm.controls;
    const registerModel = {
      firstName: fields.firstName.value,
      lastName: fields.lastName.value,
      email: fields.email.value,
      birthDate: fields.birthDate.value,
      gender: fields.gender.value,
      password: fields.password.value
    };
    this.registerService.Create(registerModel)
        .then((messageData) => {
          this.dialogService.OpenMessageDialog(messageData);
          localStorage.setItem('registrated', 'true');
          this.Registrated = true;
        });
  }
}
