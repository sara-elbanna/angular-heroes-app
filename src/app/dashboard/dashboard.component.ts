import { Component, OnInit } from '@angular/core';
import {Hero} from '../heroes';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private api: ApiService) { }
  topHeroes:Hero[] = []
  ngOnInit(): void {
    this.api.getHeroes().subscribe(heroes=>{
      this.topHeroes = heroes.splice(0,4)
    })
  }

}
