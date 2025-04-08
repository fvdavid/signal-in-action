import {
  ErrorHandler,
  inject,
  Injectable,
  makeEnvironmentProviders,
  NgZone,
} from '@angular/core';
import { ToastService } from './toast.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AppErrorHandler extends ErrorHandler {
  #toastService = inject(ToastService);
  #zone = inject(NgZone);

  override handleError(error: unknown): void {
    this.#zone.run(() => {
      if (error instanceof HttpErrorResponse) {
        this.#toastService.show('Error during backend communication.');
      } else {
        this.#toastService.show('Unexpected error.');
      }
    });

    super.handleError(error);
  }
}

export function provideAppErrorHandler() {
  return makeEnvironmentProviders([
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler,
    },
  ]);
}
