import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginEmailFilledComponent } from './login-email-filled.component';

const routes: Routes = [
  { path: 'login-email-filled', component: LoginEmailFilledComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginEmailFilledRoutingModule { }
