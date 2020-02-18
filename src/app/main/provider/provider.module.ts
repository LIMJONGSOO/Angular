import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderComponent } from './provider.component';


@NgModule({
  declarations: [ProviderComponent],
  imports: [
    CommonModule
  ],
  exports: [ProviderComponent]
})
export class ProviderModule { }
