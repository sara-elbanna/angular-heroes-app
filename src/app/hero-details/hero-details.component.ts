import { Component, OnInit,Input } from '@angular/core';
// import {Hero} from '../heroes'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/states/app.state';
import { GetHeroes, EditHero } from '../store/actions.ts/heroes.actions';
import { selectHeroesList } from '../store/selectors/heroes.selectors';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.less']
})
export class HeroDetailsComponent implements OnInit {
   hero;
   editedHero;
   showEditModal= false;

  constructor( 
    private route: ActivatedRoute,
    private location: Location,
    private _store: Store<IAppState>
  ) {
    const heroId = this.route.snapshot.paramMap.get('id');
    this._store.select(selectHeroesList)
    .subscribe(list=> {
      if(list){
        this.hero = list.find(x=> x.id == Number(heroId))
        this.editedHero = {...this.hero}
      }
    })
   }

  ngOnInit(): void {
    this._store.dispatch(new GetHeroes())
  }
  goBack(): void {
    this.location.back();
  }
  saveHero(){
    this._store.dispatch(new EditHero(this.editedHero))
    this.showEditModal= false

  }
  onClickEdit(){
    this.showEditModal= true
  }
  onCancelEdit(){
    this.showEditModal= false
  }

}
