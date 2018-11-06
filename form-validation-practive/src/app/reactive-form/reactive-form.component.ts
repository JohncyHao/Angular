import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
import { identityRevealedValidator } from '../shared/identity-revealed.directive';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };

  heroForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4),forbiddenNameValidator(/bob/i)]],
    alterEgo: [this.hero.alterEgo],
    power: [this.hero.power, Validators.required]
    // 在這邊我們想要驗證name和altEgo是否符合，但是因為name和altEgo是屬於同一個階層，因此當我們想在單個自定義的驗證器中計算這兩個控件，就必須
    // 在他們的父控件中(FormGroup)進行驗證
  },{Validators:identityRevealedValidator});


  onSubmit() {
    console.log(this.heroForm.value);
  }

  get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power'); }

  get alterEgo() { return this.heroForm.get('alterEgo'); }

  constructor(private fb: FormBuilder) { }



  ngOnInit() {
  }

}
