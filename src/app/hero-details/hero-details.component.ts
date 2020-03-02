import { Component, OnInit,Input } from '@angular/core';
import {Hero} from '../heroes'
@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.less']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero: Hero;  //props
  constructor() { }

  ngOnInit(): void {
  }

}
