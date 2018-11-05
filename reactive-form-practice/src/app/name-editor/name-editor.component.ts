import { Component, OnInit } from '@angular/core';
// 反應式表單中最基本的class 構造塊
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  // 可以在FormControl('')內設置初始值，
  name = new FormControl('');

  updateName(){
    // 反應式表單中可透過FormControl提供的setValue方法修改表單control的值
    this.name.setValue('Namcy');
  }

  constructor() { }

  ngOnInit() {
  }

}
