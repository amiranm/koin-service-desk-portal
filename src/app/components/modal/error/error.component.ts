import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

}
