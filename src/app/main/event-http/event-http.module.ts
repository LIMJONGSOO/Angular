import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventHttpComponent } from './event-http.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [EventHttpComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [EventHttpComponent]
})
export class EventHttpModule { }
