import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { HeroesReducer } from './heroes.reducer';

export const appReducers: ActionReducerMap<IAppState, any> ={
    heroes: HeroesReducer
}