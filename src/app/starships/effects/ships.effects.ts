import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ShipsActionTypes, ShipsActions } from '../actions/ships.actions';



@Injectable()
export class ShipsEffects {


  @Effect()
  loadShipss$ = this.actions$.pipe(
    ofType(ShipsActionTypes.LoadShipss),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<ShipsActions>) {}

}
