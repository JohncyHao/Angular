import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

/**透過setter截聽輸入屬性值的變化***************************** */
  private _name = '123';


  @Input()

   set name(name: string) {



    // console.log(typeof(name && name.trim()));

    // if(name && name.trim()){
    //   console.log(name.trim());
    // }else{
    //   console.log("false");
    // }

    this._name = (name && name.trim()) || '<no name set>';
    console.log(this._name);

  }

  get name(): string { return this._name; }

/************************************* */
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
