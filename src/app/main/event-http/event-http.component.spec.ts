import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHttpComponent } from './event-http.component';

describe('EventHttpComponent', () => {
  let component: EventHttpComponent;
  let fixture: ComponentFixture<EventHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
