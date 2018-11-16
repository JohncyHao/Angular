import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';



}


// 支援所有JS型別，如boolean、number、string、array，並提供額外的如enum(列舉)、any(任意型別)、void(無形別)

// var isReady:boolean ='test'; // 會告訴你型別錯誤
// 所有數值都是浮點數
var min:number=60;
var pi:number=3.14;

// 字串可以用單引號或雙引號
var name:string="hello";
name = 'helloWorld';

// 可以使用字串樣板(template literals)
// 使用 ` 包圍文字，表示為字串樣板，並透過${變數名}放置變數
var name:string='hello';
var age:number=37;
var message:string=`${name},typescript${age+1}`;

// 兩種方式定義陣列
// 1.
var idlist:number[]=[1,2,3];
// 2. 使用泛型(Array<元素型別>)
var list:Array<number>=[1,2,3];

// enum列舉型別
//1. 可以為一組數值賦予有意義的名稱，預設會從0開始為元素進行索引編號
// enum Color{Red,Green,Blue};
// //Color.Red = 0,Color.Green = 1 ,Color.Blue = 2
// var c:Color =Color.Blue;

// 2. 也可以手動指定數值，且指定的元素指會干涉之後的元素
// enum Color {Red = 1, Green, Blue};
//Color.Red = 1,Color.Green = 2 ,Color.Blue = 3
// enum Color {Red, Green = 2, Blue};
//Color.Red = 0,Color.Green = 2 ,Color.Blue = 3


// any任意型別
// 假使不希望型別檢查器對值進行檢查，那就可以用any來標記
var notSure:any=4;
notSure="asdasd";
notSure = false;

// void
// 通常用在當方法沒有回傳值時
function showalert():void{
  alert("this is the message")
}

// 基本語法
// 使用let取代var，hoistion:https://wcc723.github.io/javascript/2017/12/16/javascript-hoisting/

/**
 * msg的值會是什麼??
*/
// let msg = "web forum";
// 	function printInCaps(value){
// 		let msg = value.toUpperCase();
// 		return msg;
// 	}

// 	printInCaps("profiles");
// 	console.log(msg);

// 選擇性參數 lastname?:string，且選擇性參數一定要放在最後
function buildName(firstName: string, lastName?: string) {
  if (lastName)
      return firstName + " " + lastName;
  else
      return firstName;
}
// 有預設值的參數: lastname:string=''，且選擇性參數一定要放在最後
function buildName2(firstName: string, lastName: string = '') {
  if (lastName)
      return firstName + " " + lastName;
  else
      return firstName;
}

// 其餘參數(rest parameter)是一種參數的語法：「不確定的傳入參數值的個數」，此參數會把傳給它的"其餘"的所有值，轉換成一個【數值陣列】。
// 標示為rest param的參數，型別必須要是Array
function buildName3(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

var employeeName = buildName3("Joseph", "Samuel", "Lucas");

// arrow function 箭頭函式
// arrow function ()=>




// 聯合類型
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// interface，定義的變數比interface少一些屬性是不允許的
interface Person {
  name: string;
  age: number;
}
// 這樣是對的
let tom: Person = {
  name: 'Tom',
  age: 25
};
// 這樣是錯的(少屬性，多屬性也會是錯的)
// let tom: Person = {
//   name: 'Tom',

// };

//但是可以透過可選屬性讓你不一定要全部都實現
// interface Person {
//   name: string;
//   age?: number;
// }

// let tom: Person = {
//   name: 'Tom'
// };

// 有時候希望介面允許有任意屬性的話可以使用[propName: 型別]
// 有時候希望值只能賦值一次那就是使用readonly
// interface Person {
//   readonly id: number;
//   name: string;
//   age?: number;
//   [propName: string]: any;
// }

// let tom: Person = {
//   id: 89757,
//   name: 'Tom',
//   gender: 'male'
// };

// tom.id = 9527;

// 類型斷言，<類型>、值 或者  值 as 類型
// 在需要斷言的變數前加上<type即可>，斷言並不是類型轉換
// function getLength(something: string | number): number {
//   if ((<string>something).length) {
//       return (<string>something).length;
//   } else {
//       return something.toString().length;
//   }
// }

// class Animal {
//   constructor(nam) {
//       this.name=nam;
//   }
//   get name() {
//       return 'Jack';
//   }
//   set name(value) {
//       console.log('setter: ' + value);
//   }
// }

// let a = new Animal('Kitty'); // setter: Kitty
// a.name = 'Tom'; // setter: Tom
// console.log(a.name); // Jack


// Generic(泛型)，當你在建構function、interface、class時，不指定變數的具體型別，而是用一個型別參數做代替，會來在使用這個元件時，這個型別參數會由一個具體的型別所代替


function identity(arg:any):any{
  return arg;
}

function identity2<X>(arg:X):X{
  return arg;
}

let hello = identity("hell"+123);
console.log(hello);

let hello2 = identity2("hell"+123);
console.log(hello2);
