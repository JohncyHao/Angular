import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import {  fromEvent, of ,from} from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})


export class AppComponent implements OnInit {
  questions: any[];



  /*FormsGroup */
  formgroup = this.fb.group({
    login: [''],
    number: ['', Validators.minLength(5)]
  });




  constructor(service: QuestionService, private fb: FormBuilder) {

  }

  ngOnInit() {

    /** */
    const button = document.querySelector("button");
    // fromevent會回傳一個observable並監聽input事件，當事件觸發後會發送一個Event給對應的observer觀察者
    // 當被訂閱後如果沒有調用compltet或unsubscribe()的話會持續傳值給observer
    // const input$ = fromEvent(node, 'input');
    const button$ = fromEvent(button, 'click');
    button$.subscribe({
      next: (event: any) => console.log(`You just typed ${event.target.value}!`),
      error: (err) => console.log(`Oops... ${err}`),
      complete: () => console.log(`Complete!`)
    });


    /*FormsGroup */
    this.formgroup.valueChanges.subscribe(
      value => console.log(value),
      err => console.log(err.message)
    )

    this.formgroup.statusChanges.subscribe(
      value => console.log('status:' + value),
      err => console.log(err.message)

    )

    /**pipe */
    // const source = of(1,2,3);
    const source =from([1,2,3,4]);

    const example = source.pipe(map(val => val+10));

    const subscribetest = example.subscribe(val => console.log(val));

  }



}

