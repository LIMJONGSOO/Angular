import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './main.component';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {StateShareComponent} from './state-share/state-share.component';
import {ContentComponent} from './content/content.component';
import {LifeCycleComponent} from './life-cycle/life-cycle.component';

export const MainRoutes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'databinding', component: DataBindingComponent },
      { path: 'statusshare', component: StateShareComponent },
      { path: 'content', component: ContentComponent },
      { path: 'liftcycle', component: LifeCycleComponent },
    ]
  }
];

export const MainRouterModule = RouterModule.forChild(MainRoutes);
