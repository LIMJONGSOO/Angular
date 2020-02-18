import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentChildComponent } from './content-child.component';


@NgModule({
  declarations: [ContentChildComponent],
  imports: [
    CommonModule
  ],
  exports: [ContentChildComponent]
})
export class ContentChildModule { }
