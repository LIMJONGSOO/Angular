import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableEventHttpComponent } from './observable-event-http.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ObservableEventHttpComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [ObservableEventHttpComponent]
})
export class ObservableEventHttpModule { }
