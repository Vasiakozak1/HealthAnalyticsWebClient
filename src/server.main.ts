import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
export { AppServerModule } from './app/appserver.module';

if (environment.production) {
    enableProdMode();
}
