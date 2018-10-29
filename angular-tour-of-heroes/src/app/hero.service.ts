import { Injectable } from '@angular/core';
import { Hero } from './hero';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


//WEB API期待在保存時的請求中有一個特殊的HEADER，這個HEADER是在HeroService的httpOptions常量中定義的
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // 將訪問地址heroesURL定義為base/:collectionName ，base:要請求的資源 collectionName :in-memory-data-service.ts 中的英雄資料對象
  private heroesUrl = 'api/heroes';


  //DI(注入)MessageService，此為典型的服務中的服務，因為我們將messageService注入到heroService而heroService又被注入到HeroComponent中
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }



  //取得10個英雄的方法
  getHeroes(): Observable<Hero[]> {
    //當取得heroes後，送出HeroService: fetched heroes訊息
    this.messageService.add('HeroService: fetched heroes');


    //使用HttpClient，默認情況下把回應體當作無類型的JSON對象進行回傳
    //catchError操作符會攔截失敗的observable，並把錯誤對象傳給錯誤處理器(error handler)，而他會處理這個錯誤
    //而handleError()方法會報告這個錯誤，並回傳一個無害的結果，讓應用程式可以繼續工作
    //tap 是Rxjs的操作符，他會去查看observable中的值，並用這些值做一些事情，並且把他們傳出來。而這種tap回傳不會改變這些值本身
    //在這邊會用tap來記錄各種操作
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /**
   * 使用想獲取的英雄id建構一個請求URL、SERVER應該使用單個英雄作為回應、而非英雄陣列
   * 所以getHero會回傳observable<Hero> (一個可觀察的單個英雄對象)，而非不可觀察的英雄陣列
   * @param id
   */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }


  updateHero(hero: Hero): Observable<any> {
    //http put接受三個參數，URL地址、要修改的資料(這裡就是修改後的英雄)、選項
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * 和updateHero有兩點不同
   * 1.他調用HttpClient.post() 而不是 put()
   * 2.他期待server為這個新的英雄產生一個id，然後把它通過Observable<Hero>回傳給調用者
   * @param hero
   */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  /**
   * 從server刪除hero
   * 他調用httpClient.delete
   * URL就是英雄的資源URL加上要刪除的英雄的id
   * 你不用像put和post中那樣發送任何數據
   * 但是扔然要發送httpoptions
   */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  /**
   * 當用戶在搜索框輸入名字時，你會不斷發送根據名字過濾英雄的http請求
   */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // 如果沒有搜索的詞，此方法就返回一個空的陣列
      return of([]);
    }
    //url回傳的值會包含一個由搜索詞組成的查詢字串符
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }



  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure(基礎設施)
      console.error(error); // 記錄到console

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
