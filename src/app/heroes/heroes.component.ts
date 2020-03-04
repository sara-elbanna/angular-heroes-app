import { Component, OnInit } from '@angular/core';
import { Hero,HEROES } from '../heroes';
import {HeroService} from '../hero.service';
import {MessagesService} from '../messages.service';

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
  heroes : Hero[];

  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes =  heroes)
  }

  constructor(private heroService : HeroService, private messagesService: MessagesService) { 

  }

  ngOnInit(): void {
    this.getHeroes()
  }

}
