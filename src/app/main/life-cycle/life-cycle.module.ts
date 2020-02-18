import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeCycleComponent } from './life-cycle.component';


@NgModule({
  declarations: [LifeCycleComponent],
  imports: [
    CommonModule
  ],
  exports: [LifeCycleComponent]
})
export class LifeCycleModule { }
