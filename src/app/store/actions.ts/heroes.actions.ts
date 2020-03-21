
import {Action} from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { IHero } from 'src/app/models/heroes.interface';

export enum  EheroesActions {
  Add = '[HEROES] add hero',
  Remove = '[HEROES] remove hero',
  Get = '[HEROES] get heroes',
  GetHeroesSuccess = '[HEROES] get heroes success',
  Edit = '[HEROES] edit hero'
}

export class GetHeroes implements Action {
    public readonly type = EheroesActions.Get;
  }
  export class GetHeroesSuccess implements Action {
    public readonly type = EheroesActions.GetHeroesSuccess;
    constructor(public payload:any) {}
  }
  export class AddHero implements Action {
    public readonly type = EheroesActions.Add;
    constructor(public payload: any) {
    }
  }
  export class RemoveHero implements Action {
    public readonly type = EheroesActions.Remove;
    constructor(public payload: any) {
    }
  }
  export class EditHero implements Action {
    public readonly type = EheroesActions.Edit;
    constructor(public payload: any) {
    }
  }

export type HeroesActions =   GetHeroes | GetHeroesSuccess | AddHero | RemoveHero | EditHero