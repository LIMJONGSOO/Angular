import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent} from './main.component';
import { MainRouterModule} from './main.router.module';
import { ContentModule } from './content/content.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { EventHttpModule } from './event-http/event-http.module';
import { FormModule } from './form/form.module';
import { LifeCycleModule } from './life-cycle/life-cycle.module';
import { NgrxDemoModule } from './ngrx-demo/ngrx-demo.module';
import { ObservableEventHttpModule } from './observable-event-http/observable-event-http.module';
import { ProviderModule } from './provider/provider.module';
import { StateShareModule } from './state-share/state-share.module';


@NgModule({
  imports: [
    CommonModule,
    MainRouterModule,
    ContentModule,
    DataBindingModule,
    EventHttpModule,
    FormModule,
    LifeCycleModule,
    NgrxDemoModule,
    ObservableEventHttpModule,
    ProviderModule,
    StateShareModule,
  ],
  declarations: [
    MainComponent,
  ],
  exports: [MainComponent]
})
export class MainModule { }
