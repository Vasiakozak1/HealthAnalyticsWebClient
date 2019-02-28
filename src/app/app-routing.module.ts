import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent, data: { animation: 'register' } },
  { path: 'login', component: LoginComponent, data: {animation: 'login'} },
  { path: 'home', component: HomeComponent, data: {animation: 'home'} },
  { path: 'confirm-email', component: ConfirmEmailComponent, data: {animation: 'confirm-email'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
