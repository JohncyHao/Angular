import { Component } from '@angular/core';
import { pipe, range, timer} from 'rxjs';
import { retryWhen, mergeMap, map ,zip, tap  } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


}
// retryWhen 當發生錯誤實基於自定義的標準來重試
// range 依次發出給定區間內的數字，在這邊透過這個方式讓下面的pipe執行3次
// zip 當observable完成時，將他們的值作為陣列發出
// map 對源observable的每個值應用投射函數
// mergeMap  映射成observable並發出值，mergeMap = map + MergeAll
// timer 按照給定的時間間隔一次發出
function backoff(maxTries, ms) {
  return pipe(
    retryWhen(attempts => range(1, maxTries)
      .pipe(
        zip(attempts, i => i),tap(i => console.log(attempts)),
        map(i => i * i),tap(i => console.log("2")),
        mergeMap(i => timer(i * ms)),tap(i => console.log("3")),
      )
    ),
    tap(val => console.log("2"))
  );
}



// http://5be38370d53daf0013250f64.mockapi.io/api/v1/user
ajax('hte38370d53daf0013250f64.mockapi.io/api/v1/user')
  .pipe(backoff(3,1000))
  .subscribe(data => handleData(data));

function handleData(data){
  console.log(data);
}



