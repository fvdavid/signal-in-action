import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((h) => h.HomeComponent),
  },
  {
    path: 'resource',
    loadComponent: () =>
      import('./timer-resource/timer-resource.component').then(
        (t) => t.TimerResourceComponent
      ),
  },
  {
    path: 'rx-resource',
    loadComponent: () =>
      import('./timer-rx-resource/timer-rx-resource.component').then(
        (tx) => tx.TimerRxResourceComponent
      ),
  },
  {
    path: 'chat',
    loadComponent: () =>
      import('./chat/chat.component').then((c) => c.ChatComponent),
  },
] as Routes;
