import { Component, OnInit } from '@angular/core';
// FormBuilder服務提供更簡潔的方式去新增表單，Validators提供簡單的驗證功能，會根據驗證結果返回錯誤對象或空值
// FormArray提供管理任意數量的匿名控制，且可以不用定義key值，因此當你不知道你會有幾個子控件時就可以使用這個
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name-directive';




@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  // 透過formgroup來讓程式碼更簡潔，formgroup本身就包含form(control、group、array)
  // 如果我們的控件需要同步或者非同步的驗證器，可以在屬性陣列的第二和第三項提供同步和非同步驗證器
  profileForm = this.fb.group({
    // 要求firstName為必填
    firstName:['',[Validators.required,forbiddenNameValidator(/bob/i)]],
    lastName:[''],
    address:this.fb.group({
      street:[''],
      city:[''],
      state:[''],
      zip:['']
    }),
    aliases:this.fb.array([
      // FormArray的功能，因為我們有使用formbuilder了所以可以不需要import
      this.fb.control('')
    ])
  })

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


  get aliases(){
    // 因為回傳的控件類型是AbstractControl，所以必須要為方法提供一個"顯式"的類型宣告來訪問FromArray特有的語法
    return this.profileForm.get('aliases') as FormArray;
  }

  // 動態插入到FormArray中
  addAlias(){
    this.aliases.push(this.fb.control(''));
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

}
