import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  public login() {
    const email: string = this.LoginForm.controls['email'].value;
    const password: string = this.LoginForm.controls['password'].value;

    this.userService.Login(email, password);
  }

}
