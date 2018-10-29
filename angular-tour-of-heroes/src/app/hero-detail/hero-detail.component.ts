import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
   hero: Hero;

  constructor(
    //保存著到這個 HeroDetailComponent的路由訊息，這個component會取得路由的參數，而這個參數就是要實現的英雄ID
    private route:ActivatedRoute,
    //從遠端server取得英雄資料，本component將使用它來取得要顯示的英雄
    private heroService:HeroService,
    //他是Angular的服務，用來與瀏覽器打交道，我們會利用她來導航回上一個view
    private location:Location
  ) {console.log(route);}

  ngOnInit():void {
    this.getHero();

  }
  getHero():void{
    //route.snapshot是一個路由器訊息的靜態快照，取自元件剛剛建立完畢之後
    //paraMap是一個從URL中提取的路由參數值的字典，而id就是對應到要獲取的英雄id
    const id =+this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack():void{
    //透過以前DI的location服務在瀏覽器的歷史線中後退一步
    this.location.back();
  }
  save():void{
    this.heroService.updateHero(this.hero)
      .subscribe(()=>this.goBack());
  }

}
