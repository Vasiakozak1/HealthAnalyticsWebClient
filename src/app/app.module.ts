import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_MOMENT_DATE_FORMATS, MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConstants } from './app.constants';

import { RegisterService } from './services/register.service';
import { DialogService } from './services/dialog.service';
import { UserService } from './services/user.service';
import { NotificationService } from './services/notification.service';

import { RegisterComponent } from './components/register/register.component';
import { ConfirmAccountComponent } from './components/confirm-account/confirm-account.component';
import { MessageDialogComponent } from './components/dialogs/message-dialog/message-dialog.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { MessageSnackbarComponent } from './components/dialogs/message-snackbar/message-snackbar.component';
import { AppHttpInterceptor } from './app.http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ConfirmAccountComponent,
    MessageDialogComponent,
    LoginComponent,
    HomeComponent,
    ConfirmEmailComponent,
    MessageSnackbarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ha-app'}),
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatMomentDateModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatSnackBarModule
  ],
  entryComponents: [
    MessageDialogComponent
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
export class AppModule { }
