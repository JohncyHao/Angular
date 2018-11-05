import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  // FormGroup使用方式
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  onSubmit(){
    //透過這個方式把值紀錄到瀏覽器的console中
    console.warn(this.profileForm.value);
    //console.log(this.profileForm.value);
  }

  updateProfile(){
    // 有兩種方法可以更新  1.setvalue() 他是控制單一值進行更新，他會嚴格遵守表單的結構，並整個替換控建的值，因此有錯誤時可以找到
    // 2.patchValue() 對整個控件中的所有屬性都可以進行替換，但也因為不嚴謹，所以出錯的話，會默默的失敗
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
