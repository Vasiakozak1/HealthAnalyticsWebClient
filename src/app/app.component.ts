import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { slidePageAnimation } from './animations/slidepage.animation';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slidePageAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'HealthAnalytics';

  public constructor(private userService: UserService) {}

  ngOnInit() {

  }

  public IsAuthenticated(): boolean {
    return this.userService.IsAuthenticated();
  }

  public prepareOutlet(outlet: RouterOutlet): boolean {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  private manageAuthentication() {

  }

}
