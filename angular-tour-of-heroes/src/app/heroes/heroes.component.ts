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
    //透過相依注入(DI)取得英雄列表
    //這裡是同步的，他所隱含的假設是HeroService總是能同步獲取英雄列表的資料，而HerosComponent也同樣假設能同步取到getHeroes()的結果
    //現在可以這麼做的原因是我們的資料還是假的，以後要用到遠端服務器取得英雄資料時那就會是非同步的操作，HeroService必須等服務器回應
    //而getHeroes不能馬上回傳英雄數據，瀏覽器也不會再該服務等待期間停止回應
    //heroService.getHeroes()必須有某種形式的非同步簽名(asynchronous signature)，而他可以使用callback函式，可以返回promise或observable(觀察者)
    //而heroService.getHeroes()將回傳obserable，因為他最終會使用Angular的HttpClient.get方法來取得英雄資料
    // this.heroes = this.heroService.getHeroes();

    //在更改service後，他現在回傳的是一個 Observable<Hero[]>，因此在此要將程式碼改為以下方式(透過訂閱)
    //透過subscribe來達成非同步，在此他會等待obserable發出這個英雄的陣列，這可能馬上發生，也可能在幾分鐘之後，然後subscribe函式會把這個英雄的陣列傳給回傳函式
    //該函式把英雄陣列賦值給元件的herors屬性
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
