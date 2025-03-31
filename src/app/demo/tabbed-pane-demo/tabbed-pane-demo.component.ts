import { Component, signal } from '@angular/core';
import { TabbedPaneComponent } from '../../component/tabbed-pane/tabbed-pane.component';
import { TabComponent } from '../../component/tab/tab.component';

@Component({
  selector: 'app-tabbed-pane-demo',
  imports: [TabbedPaneComponent, TabComponent],
  templateUrl: './tabbed-pane-demo.component.html',
  styleUrl: './tabbed-pane-demo.component.scss',
})
export class TabbedPaneDemoComponent {
  current = signal(0);
}
