import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateShareComponent } from './state-share.component';
import { ChildModule } from './child/child.module';



@NgModule({
  declarations: [StateShareComponent],
  imports: [
    CommonModule,
    ChildModule,
  ],
  exports: [StateShareComponent]
})
export class StateShareModule { }
