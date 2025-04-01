import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  imports: [FormsModule],
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.scss',
})
export class FormDemoComponent {
  form = viewChild.required(NgForm);

  userNameCtrl =
    viewChild.required<ElementRef<HTMLInputElement>>('userNameCtrl');
  passwordCtrl =
    viewChild.required<ElementRef<HTMLInputElement>>('passwordCtrl');

  password = signal('');
  userName = signal('');

  save() {
    const form = this.form();
    if (form.controls['userName'].invalid) {
      console.log('userName invalid');

      this.userNameCtrl().nativeElement.focus();
      return;
    }

    if (form.controls['password'].invalid) {
      console.log('password invalid');

      this.passwordCtrl().nativeElement.focus();
      return;
    }

    console.log('save', this.userName(), this.password());
  }
}
