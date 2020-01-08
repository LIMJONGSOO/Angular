import { Routes, RouterModule } from '@angular/router';

import { MainComponent} from './main.component';
import { DataBindingComponent} from './data-binding/data-binding.component';
import { StateShareComponent} from './state-share/state-share.component';
import { ContentComponent} from './content/content.component';
import { LifeCycleComponent} from './life-cycle/life-cycle.component';
import { ObservableEventHttpComponent } from './observable-event-http/observable-event-http.component';
import { FormComponent } from './form/form.component';
import { NgrxDemoComponent } from './ngrx-demo/ngrx-demo.component'

export const MainRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'databinding', component: DataBindingComponent },
      { path: 'stateshare', component: StateShareComponent },
      { path: 'content', component: ContentComponent },
      { path: 'liftcycle', component: LifeCycleComponent },
      { path: 'observable', component: ObservableEventHttpComponent },
      { path: 'form', component: FormComponent },
      { path: 'ngrx', component: NgrxDemoComponent },
    ]
  }
];

export const MainRouterModule = RouterModule.forChild(MainRoutes);
