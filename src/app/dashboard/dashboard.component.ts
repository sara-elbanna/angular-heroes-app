import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service'
import {Hero} from '../heroes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  Heroes:Hero[] = []
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes=>{
      this.Heroes = heroes
    })
  }

}
