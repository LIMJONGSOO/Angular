import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateShareComponent } from './state-share.component';

describe('StateShareComponent', () => {
  let component: StateShareComponent;
  let fixture: ComponentFixture<StateShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
