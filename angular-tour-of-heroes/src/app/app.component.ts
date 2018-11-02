import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

   items = [];

  constructor() {
    this.items =[{name:'work'},{name:'sport'},{name:'learn'}];
  }

  ngOnInit(): void {

  }

  getItems(){
    this.items = this.getItemsFormServer();
  }

  getItemsFormServer(){
    return [{ name: 'Work' }, { name: 'Sport' }, { name: 'Learn' }, { name: 'Class' }, { name: 'Game' }, { name: 'Sleep' }, { name: 'Teach' }];
  }

}
