import {
  Component,
  computed,
  contentChildren,
  input,
  output,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabbed-pane',
  imports: [],
  templateUrl: './tabbed-pane.component.html',
  styleUrl: './tabbed-pane.component.scss',
})
export class TabbedPaneComponent {
  current = input(0);
  currentChange = output<number>();

  tabs = contentChildren(TabComponent);
  currentTab = computed(() => this.tabs()[this.current()]);
}
