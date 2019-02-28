import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute
            , private registerService: RegisterService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        const email: string = params['email'];
        const token: string = params['token'];
        this.registerService.ConfirmEmail(email, token);
    });
  }

}
