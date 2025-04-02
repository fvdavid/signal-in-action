import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {

  label = input.required<string>();
  confirmed = output<string>();

  confirm() {
    this.confirmed.emit(this.label());
  }
}
