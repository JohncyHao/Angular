import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  //將HEROES CLASS的資料帶回來(也就是10個英雄的資料)
  //heroes = HEROES;

  ////改為一個簡單的declaration(聲明)，聲明一個物件heroes
  heroes :Hero[];
  //selectedHero: Hero;

   //做了兩件事1.聲明一個私有的heroService屬性 2.把它標記為一個HeroService的注入點(DI)
  constructor(private heroService: HeroService) { }

  ngOnInit() {

    this.getHeroes();
  }

  getHeroes():void{

    //在更改service後，他現在回傳的是一個 Observable<Hero[]>，因此在此要將程式碼改為以下方式(透過訂閱)
    //透過subscribe來達成非同步，在此他會等待obserable發出這個英雄的陣列，這可能馬上發生，也可能在幾分鐘之後，然後subscribe函式會把這個英雄的陣列傳給回傳函式
    //該函式把英雄陣列賦值給元件的herors屬性
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
/**
 * 當指定的名子不是空的時候，這個處理器會用這個名子創建一個類似於Hero的對象(只缺少id屬性)，並把他傳給服務的addHero()方法
 * 當addHero保存成功時，subscribe的回傳函數會收到這個新英雄，並把他push到heroes列表中顯示
 * @param name
 */
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
