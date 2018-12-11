import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConstants } from './app.constants';
import { RegisterService } from './services/register.service';
import { RegisterComponent } from './components/register/register.component';
import { ConfirmAccountComponent } from './components/confirm-account/confirm-account.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ConfirmAccountComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatMomentDateModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [
    AppConstants,
    RegisterService,
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
   // { provide: DateAdapter, useClass: MomentDateAdapter, deps: MAT_DATE_LOCALE },
    { provide: MAT_DATE_LOCALE, useValue: 'uk' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
