import { Component, computed, ResourceStatus, signal } from '@angular/core';
import { timerrxResource } from '../utils/timer-rxresource';

@Component({
  selector: 'app-timer-rx-resource',
  imports: [],
  templateUrl: './timer-rx-resource.component.html',
  styleUrl: './timer-rx-resource.component.scss',
})
export class TimerRxResourceComponent {
  ResourceStatus = ResourceStatus;

  startValue = signal(0);

  request = computed(() => ({
    startValue: this.startValue(),
  }));

  timerResource = timerrxResource(1000, this.startValue);

  forward(): void {
    this.startValue.update((v) => nextSegment(v));
  }
}

function nextSegment(currentValue: number): number {
  return Math.floor(currentValue / 100) * 100 + 100;
}
