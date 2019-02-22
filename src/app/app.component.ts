import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { slidePageAnimation } from './animations/slidepage.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slidePageAnimation
  ]
})
export class AppComponent {
  title = 'HealthAnalytics';

  public prepareOutlet(outlet: RouterOutlet): boolean {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
