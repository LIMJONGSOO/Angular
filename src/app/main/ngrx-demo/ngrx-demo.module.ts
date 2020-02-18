import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxDemoComponent } from './ngrx-demo.component';


@NgModule({
  declarations: [NgrxDemoComponent],
  imports: [
    CommonModule
  ],
  exports: [NgrxDemoComponent]
})
export class NgrxDemoModule { }
