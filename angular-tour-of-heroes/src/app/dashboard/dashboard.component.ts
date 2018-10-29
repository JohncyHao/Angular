import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
       //此getHeros函數會擷取第2到第5位英雄也就是指返回四個英雄(2、3、4、5)，slice(開始,結束(不含))，
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
