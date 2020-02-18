import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRouterModule } from './login.router.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRouterModule,
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
