import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
