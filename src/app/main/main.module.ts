import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRouterModule} from './main.router.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StateShareComponent } from './state-share/state-share.component';
import { ChildComponent } from './state-share/child/child.component';
import { ContentComponent } from './content/content.component';
import { ContentChildComponent } from './content/content-child/content-child.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component'; 
import { ObservableEventHttpComponent } from './observable-event-http/observable-event-http.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgrxDemoComponent } from './ngrx-demo/ngrx-demo.component';

@NgModule({
  imports: [
    CommonModule,
    MainRouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DataBindingComponent,
    StateShareComponent,
    ChildComponent,
    ContentComponent,
    ContentChildComponent,
    LifeCycleComponent,
    ObservableEventHttpComponent,
    FormComponent,
    NgrxDemoComponent,
  ],
  exports: []
})
export class MainModule { }
