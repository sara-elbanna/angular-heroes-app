import { Component, OnInit } from '@angular/core';
import { Hero,HEROES } from '../heroes';
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
  heroes = HEROES;
  selectedHero:Hero;
  onSelectHero(hero:Hero):void{
    this.selectedHero = hero
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
