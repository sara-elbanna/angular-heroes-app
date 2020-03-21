import { Component, OnInit } from '@angular/core';
import {Hero} from '../heroes';
import { ApiService } from '../api.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/states/app.state';
import { Observable } from 'rxjs';
import * as heroesActions from '../store/actions.ts/heroes.actions';
import { selectHeroesList } from '../store/selectors/heroes.selectors';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  topHeroes= [];
  constructor( private _store: Store<IAppState>) {
    this._store.select(selectHeroesList)
    .subscribe(list=> {
      if(list){
        const copy = [...list]
        this.topHeroes = [...copy.splice(0,4)]
      }
    })

   }

  ngOnInit(): void {
    this._store.dispatch(new heroesActions.GetHeroes())
  }

}
