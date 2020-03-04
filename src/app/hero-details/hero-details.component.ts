import { Component, OnInit,Input } from '@angular/core';
import {Hero} from '../heroes'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.less']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero: Hero;  //props
  constructor( private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(heroId).subscribe(hero=>{
      this.hero = hero
    })
  }
  goBack(): void {
    this.location.back();
  }

}
