import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators, FormArray } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';



@Component({
  selector: 'app-simpoe-form',
  templateUrl: './simpoe-form.component.html',
  styleUrls: ['./simpoe-form.component.css']
})
export class SimpoeFormComponent implements OnInit {

  ab = 1;
  qwe: Array<any>;


  profileForm = this.fb.group({
    id: [this.ab],

      name: ['', [Validators.required]],
      phone: ['', [Validators.maxLength(11), Validators.minLength(11), Validators.required, Validators.pattern('[0-9 -]*')]],
      hphone: ['', [Validators.maxLength(11), Validators.minLength(11), Validators.required, Validators.pattern('[0-9 -]*')]],
      email: ['', [Validators.email, Validators.required]],
      ydate: ['', [Validators.required, Validators.min(1911), Validators.max(2018), Validators.pattern('[0-9 -]*')]],
      mdate: ['', [Validators.required, Validators.min(1), Validators.max(12), Validators.pattern('[0-9]*')]],
      ddate: ['', [Validators.required, Validators.min(1), Validators.max(31), Validators.pattern('[0-9]*')]],
      address: ['', Validators.required]
    })



  constructor(public fb: FormBuilder) { }
  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  reset() {

    this.ab = this.ab + 1;

    this.qwe.push(JSON.stringify(this.profileForm.value));

    console.log(this.qwe);

    // this.profileForm.setValue({
    //   id: this.ab,
    //   name: [''],
    //   phone: [''],
    //   hphone: [''],
    //   email: [''],
    //   ydate: [''],
    //   mdate: [''],
    //   ddate: [''],
    //   address: [''],
    // });
  }

  today: number = Date.now();

  //  get diagnostic() { return JSON.stringify(this.profileForm); }



}
