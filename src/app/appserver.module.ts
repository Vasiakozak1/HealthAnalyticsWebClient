import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppConstants } from './app.constants';
import { RegisterService } from './services/register.service';
import { NotificationService } from './services/notification.service';
import { DialogService } from './services/dialog.service';
import { UserService } from './services/user.service';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './app.http.interceptor';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({appId: 'ha-app'}),
        AppModule,
        ServerModule,
        ModuleMapLoaderModule
    ],
    providers: [
        AppConstants,
    RegisterService,
    NotificationService,
    DialogService,
    UserService,
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'uk' },
     {
       provide: HTTP_INTERCEPTORS,
       useClass: AppHttpInterceptor,
       multi: true
     }
    ],
    bootstrap: [AppComponent]
})
export class AppServerModule {
}
