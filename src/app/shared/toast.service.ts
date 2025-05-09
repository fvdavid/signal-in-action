import { Component, inject, Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  message$ = new Subject<string>();

  constructor() {}

  show(message: string): void {
    this.message$.next(message);
  }
}

@Component({
  selector: 'app-toast-nd',
  standalone: true,
  template: `
    @if (message) {
    <div class="toast">{{ message }}</div>
    }
  `,
  styles: `
    /* taken from: https://www.w3schools.com/howto/howto_js_snackbar.asp */
    .toast {
      min-width: 250px;
      margin-left: -125px;
      background-color: #333;
      color: #fff;
      text-align: center;
      border-radius: 2px;
      padding: 16px;
      position: fixed;
      z-index: 1;
      left: 50%;
      bottom: 30px;
    }
  `,
})
export class ToastNdComponent implements OnInit {
  toastService = inject(ToastService);
  message = '';

  ngOnInit(): void {
    let handle: unknown;
    this.toastService.message$.subscribe((message) => {
      clearTimeout(handle as number);
      this.message = message;
      handle = setTimeout(() => {
        this.message = '';
      }, 3000);
    });
  }
}
