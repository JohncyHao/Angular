import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
 // Displays 'Mr. IQ', '<no name set>', 'Bombasto'
 names = ['M  r.I Q ', '   ', '  Bombasto  '];
  value = '';

  constructor() {

  }

  ngOnInit(): void {

  }

  onEnter(value: string) { this.value = value; }


}
