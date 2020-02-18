import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentChildModule } from './content-child/content-child.module';
import { DataBindingModule } from '../data-binding/data-binding.module';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    ContentChildModule,
    DataBindingModule,
  ],
  exports: [ContentComponent]
})
export class ContentModule { }
