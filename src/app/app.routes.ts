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
];
