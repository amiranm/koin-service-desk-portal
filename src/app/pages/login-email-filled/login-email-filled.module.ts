import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginEmailFilledRoutingModule } from './login-email-filled-routing.module';
import { LoginEmailFilledComponent } from './login-email-filled.component';


@NgModule({
  declarations: [
    LoginEmailFilledComponent
  ],
  imports: [
    CommonModule,
    LoginEmailFilledRoutingModule
  ]
})
export class LoginEmailFilledModule { }
