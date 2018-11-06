import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { FormGroup, FormControl } from '@angular/forms';
import { identityRevealedValidator } from '../shared/identity-revealed.directive';




@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart','Super Flexible','Super Hot','Weater Changer'];

  model = new Hero(18,'DR IQ',this.powers[0],'Chuck Overstreet');

  submitted = false;


  /*反應式表單區塊*/
  heroForm = new FormGroup({
    'name': new FormControl(),
    'alterEgo': new FormControl(),
    'power': new FormControl()
  }, { validators: identityRevealedValidator });

  /**/
  onSubmit(){
    this.submitted = true;
  }

  newHero(){
    this.model = new Hero(42,'','');
  }

  // 返回模型的JSON形式
  get diagnostic(){
    return JSON.stringify(this.model);
  }
  constructor() { }

  ngOnInit() {
  }

}
