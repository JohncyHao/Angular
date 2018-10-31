import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  ngOnInit(): void {



    console.log("2. 回傳的參數: " + typeof (id("HELLO")));

    // console.log()
    function id(age: any): number {
      console.log("1. 方法裡的參數: " + typeof (age));
      return age
    }


  }
}
