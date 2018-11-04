import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-reference-variables';
  showNumber = '';

  numberClick(number) {
    this.showNumber =  number;
  }

}
