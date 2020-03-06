import { Component, OnInit,Input } from '@angular/core';
import {Hero} from '../heroes'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.less']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero: Hero;  //props
  constructor( private route: ActivatedRoute,
    private api: ApiService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
    this.api.getHeroes().subscribe(heroes=>{
      this.hero = heroes.find(x=> x.id === heroId)
    })
  }
  goBack(): void {
    this.location.back();
  }

}
