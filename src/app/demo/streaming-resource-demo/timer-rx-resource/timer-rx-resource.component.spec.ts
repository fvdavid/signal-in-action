import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerRxResourceComponent } from './timer-rx-resource.component';

describe('TimerRxResourceComponent', () => {
  let component: TimerRxResourceComponent;
  let fixture: ComponentFixture<TimerRxResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerRxResourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerRxResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
