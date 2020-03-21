import { Component, OnInit } from '@angular/core';
import { Hero,HEROES } from '../heroes';
import {MessagesService} from '../messages.service';
import { ApiService } from '../api.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/states/app.state';
import * as heroesActions from '../store/actions.ts/heroes.actions'; 
import { HeroesEffects } from '../store/effects/heroes.effects'
import { selectHeroesList } from '../store/selectors/heroes.selectors';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  me: Hero = {
    id:1,
    name: 'sara'
  }
  heroes:any[];
  showAddModal= false;
  newHero;
  searchInput;
  filteredHeroes =[]

  getHeroes(): any{
    this._store.select(selectHeroesList).subscribe(res=>{
      this.heroes = res;
      this.filteredHeroes = res
    })
    
  }
  onSearch(){
    if(this.searchInput){
      this.filteredHeroes = [...this.heroes].filter(x=> x.name.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1)
    }
    else{
      this.filteredHeroes = this.heroes
    }
  }
  deleteHero(id){
    // this.heroes = this.heroes.filter(h => h.id !== id)
    this._store.dispatch(new heroesActions.RemoveHero(id) )

  }
  addHero(){
    this._store.dispatch(new heroesActions.AddHero({id:this.heroes.length + 1, name:this.newHero}) )
    this.showAddModal = false;
    this.newHero = ""
  }
  onClickAddHero(){
    this.showAddModal = true
  }
  handleCancelModal(){
    this.showAddModal = false

  }
  constructor(private api: ApiService, private _store : Store<IAppState>) { 

  }

  ngOnInit(): void {
    this._store.dispatch(new heroesActions.GetHeroes())
    this.getHeroes()

  }

}
