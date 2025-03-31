import { Component, computed, inject, input } from '@angular/core';
import { TabbedPaneComponent } from '../tabbed-pane/tabbed-pane.component';

@Component({
  selector: 'app-tab',
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {

  pane = inject(TabbedPaneComponent);

  title = input.required<string>();
  visible = computed(() => this.pane.currentTab() === this);

}
