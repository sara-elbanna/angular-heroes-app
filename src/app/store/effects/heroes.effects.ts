import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { ApiService } from '../../api.service';
import * as HeroesActions  from '../actions.ts/heroes.actions';
import { Store } from '@ngrx/store';
import { IAppState } from '../states/app.state';


@Injectable()
export class  HeroesEffects {
 @Effect()

  loadHeroes = this._actions$.pipe(
    ofType(HeroesActions.EheroesActions.Get),
    switchMap(()=>{
      return this.apiService.getHeroes().pipe(
        map( heroes => ({type: HeroesActions.EheroesActions.GetHeroesSuccess, payload: heroes}) ),
        catchError(e => e)
      )
    })

  )
 
  constructor(
    private _actions$: Actions,
    private apiService: ApiService,
    private _store: Store<IAppState>
  ) {
  }
}