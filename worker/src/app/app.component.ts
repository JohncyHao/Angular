import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  update:boolean =false;
  joke:any;
   constructor(updates:SwUpdate,private data:DataService){
     // 告訴你有更新可以使用
     updates.available.subscribe(event=>{
      //  this.update =true;
        //有更新的話就自動更新
        updates.activateUpdate().then(()=>document.location.reload());
     })
   }
   ngOnInit(): void {
     this.data.gimmeJokes().subscribe(res => {
       this.joke = res;
     })

   }
}
