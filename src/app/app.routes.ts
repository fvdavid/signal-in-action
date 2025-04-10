import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./demo/tabbed-pane-demo/tabbed-pane-demo.component').then(
        (t) => t.TabbedPaneDemoComponent
      ),
  },
  {
    path: 'form-demo',
    loadComponent: () =>
      import('./demo/form-demo/form-demo.component').then(
        (f) => f.FormDemoComponent
      ),
  },
  {
    path: 'toast-demo',
    loadComponent: () =>
      import('./demo/toast-demo/toast-demo.component').then(
        (t) => t.ToastDemoComponent
      ),
  },
  {
    path: 'dessert-demo',
    loadComponent: () =>
      import('./demo/desserts/desserts.component').then(
        (d) => d.DessertsComponent
      ),
  },
  {
    path: 'streaming-resource-demo',
    loadChildren: () =>
      import('./demo/streaming-resource-demo/streaming-resource.routes'),
  },
];
