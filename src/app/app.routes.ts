import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./demo/tabbed-pane-demo/tabbed-pane-demo.component').then(
        (t) => t.TabbedPaneDemoComponent
      ),
  },
];
