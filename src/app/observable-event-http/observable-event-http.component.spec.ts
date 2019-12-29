import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableEventHttpComponent } from './observable-event-http.component';

describe('ObservableEventHttpComponent', () => {
  let component: ObservableEventHttpComponent;
  let fixture: ComponentFixture<ObservableEventHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableEventHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableEventHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
