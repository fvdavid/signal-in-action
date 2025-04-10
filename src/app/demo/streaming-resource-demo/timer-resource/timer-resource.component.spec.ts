import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerResourceComponent } from './timer-resource.component';

describe('TimerResourceComponent', () => {
  let component: TimerResourceComponent;
  let fixture: ComponentFixture<TimerResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerResourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
