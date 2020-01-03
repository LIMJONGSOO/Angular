import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import { ObservableEventHttpComponent } from './observable-event-http/observable-event-http.component';
import { FormComponent } from './form/form.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // 첫 화면을 login 페이지로 설정
  { path: 'login', component: LoginComponent, }, // url 경로가 /login 일때 LoginComponent를 보여준다.
  { path: 'main', component: MainComponent, }, // url 경로가 /main 일때 MainComponent를 보여준다.
  { path: 'observable', component: ObservableEventHttpComponent, }, // url 경로가 /observable 일때 ObservableEventHttpComponent를 보여준다.
  { path: 'form', component: FormComponent, }, // url 경로가 /form 일때 FormComponent를 보여준다.
  { path: 'welcome', component: WelcomeComponent, }, // url 경로가 /welcome 일때 WelcomeComponent 보여준다.
  { path: '**', redirectTo: '/login', pathMatch: 'full' }, // 잘못된 URL을 사용했을때 Login 페이지로 돌려보냄.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
