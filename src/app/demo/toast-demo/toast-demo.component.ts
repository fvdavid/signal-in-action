import { Component, viewChild, ViewContainerRef } from '@angular/core';
import { ToastComponent } from '../../component/toast/toast.component';
import { outputToObservable } from '@angular/core/rxjs-interop';
import { map, race, timer } from 'rxjs';

@Component({
  selector: 'app-toast-demo',
  imports: [],
  templateUrl: './toast-demo.component.html',
  styleUrl: './toast-demo.component.scss',
})
export class ToastDemoComponent {
  counter = 0;
  placeholder = viewChild.required('placeholder', { read: ViewContainerRef });

  show() {
    const ref = this.placeholder().createComponent(ToastComponent);
    this.counter++;

    ref.setInput('label', 'Message #' + this.counter);

    ref.instance.confirmed.subscribe((title) => {
      ref.destroy();
      console.log('Confirmed: ' + title);
    });

    setTimeout(() => ref.destroy(), 5000);
  }

  showTitle() {
    const ref = this.placeholder().createComponent(ToastComponent);
    this.counter++;

    const title = 'Message # ' + this.counter;
    ref.setInput('label', title);

    const confirmed$ = outputToObservable(ref.instance.confirmed).pipe(
      map((title) => ({ trigger: 'confirmed', title }))
    );

    const timer$ = timer(5000).pipe(map(() => ({ trigger: 'timeout', title })));

    race(confirmed$, timer$).subscribe((action) => {
      ref.destroy();
      console.log('action => ', action);
    });
  }
}
