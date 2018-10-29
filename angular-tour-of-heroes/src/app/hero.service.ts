import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';




@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //DI(注入)MessageService，此為典型的服務中的服務，因為我們將messageService注入到heroService而heroService又被注入到HeroComponent中
  constructor(private messageService: MessageService) { }

  //回傳模擬的英雄列表
  // getHeroes():Hero[]{
  //   return HEROES;
  // }

  //取得10個英雄的方法
  getHeroes():Observable<Hero[]>{
    //當取得heroes後，送出HeroService: fetched heroes訊息
    this.messageService.add('HeroService: fetched heroes');
    //會用到of的原因參考https://stackoverflow.com/questions/47889210/why-we-should-use-rxjs-of-function
    //of (HEROES)會回傳一個Observable<Hero[]>的值，這個值就是模擬的英雄資料
    return of (HEROES);
  }

  getHero(id:number):Observable<Hero>{
    //當接收到hero後傳後訊息
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    console.log("id");
    return of(HEROES.find(hero =>hero.id === id));
  }
}
