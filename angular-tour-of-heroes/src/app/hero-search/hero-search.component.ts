import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    //RxJS subject類型的searchTrems(搜尋條款)，searchTrems屬性宣告成RxJS的類型
    //而Subject既是可觀察對象的數據源，本身也是一個observable，你可以像訂閱任何observable依樣訂閱subject
    //還可以透過調用他的next(value)方法往observable中推送一些值，就像search()方法中一樣
    //search次透過對輸入框的keystroke事件的event binding來調用的
    //當使用者在輸入框輸入時，這個event binding就會使用輸入框的值(search term，搜索詞)調用search()函數
    this.heroes$ = this.searchTerms.pipe(
      // 再傳出最後的字串之前debounceTime會等待，直到新增字符串的事件暫停了300毫秒
      debounceTime(300),

      //忽略和前一個一樣的搜索詞
      distinctUntilChanged(),

      // switchMap()會為每個從debounce和distinctUntilChanged中通過的搜索詞調用搜索服務，他會取消並丟棄以前的搜索可觀察對象，只保留最近的
      //使用switchMap()時，在每個有效的點擊事件都會觸發一次HttpClient.get() 方法
      //switchMap()會記住原始的請求順序只會返回最近一次http方法的結果
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

}
