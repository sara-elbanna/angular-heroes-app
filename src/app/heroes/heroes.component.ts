import { Component, OnInit } from '@angular/core';
import { Hero,HEROES } from '../heroes';
import {MessagesService} from '../messages.service';
import { ApiService } from '../api.service';

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
  heroes:any[]

  getHeroes(): any{
    this.api.getHeroes().subscribe(res=>{
      this.heroes = res
    })
  }
  onSearch(){
    console.log('nnn',)
  }

  constructor(private api: ApiService, private messagesService: MessagesService) { 

  }

  ngOnInit(): void {
    this.getHeroes()
  }

}
