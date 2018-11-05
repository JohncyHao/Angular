import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-simpoe-form',
  templateUrl: './simpoe-form.component.html',
  styleUrls: ['./simpoe-form.component.css']
})
export class SimpoeFormComponent implements OnInit {

  profileForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    phone: ['', [Validators.maxLength(11), Validators.minLength(11), Validators.required, Validators.pattern('[0-9 -]*')]],
    email: ['', [Validators.email, Validators.required]],
    date: [''],
  });

  today: number = Date.now();


  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.today);
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  reset() {
    this.profileForm.setValue({
      id: [''],
      name: [''],
      phone: [''],
      email: [''],
      date: [''],
    });
  }


}
