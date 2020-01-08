import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store/reducers';
import * as authActions from '../../store/actions/auth.actions';

@Component({
  selector: 'app-ngrx-demo',
  templateUrl: './ngrx-demo.component.html',
  styleUrls: ['./ngrx-demo.component.scss']
})
export class NgrxDemoComponent implements OnInit {
  name$: Observable<string>;
  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.store.dispatch(new authActions.LoadAuths());
    this.name$ = this.store.select(fromStore.getFriendlyName);
  }

}
