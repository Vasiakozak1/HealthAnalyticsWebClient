import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConstants } from './app.constants';

import { RegisterService } from './services/register.service';
import { DialogService } from './services/dialog.service';
import { UserService } from './services/user.service';

import { RegisterComponent } from './components/register/register.component';
import { ConfirmAccountComponent } from './components/confirm-account/confirm-account.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageDialogComponent } from './components/dialogs/message-dialog/message-dialog.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ConfirmAccountComponent,
    MessageDialogComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    MatToolbarModule
  ],
  entryComponents: [
    MessageDialogComponent
  ],
  providers: [
    AppConstants,
    RegisterService,
    DialogService,
    UserService,
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'uk' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
