import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-email-filled',
  templateUrl: './login-email-filled.component.html',
  styleUrl: './login-email-filled.component.scss'
})
export class LoginEmailFilledComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
