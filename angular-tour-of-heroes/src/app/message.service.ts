import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages:string[] = [];

  //constructor() { }

  //往cache(暫存)中加入一條訊息
  add(message:string){
    this.messages.push(message);
  }
  //清空cache(暫存)
  clear(){
    this.messages =[];
  }
}
