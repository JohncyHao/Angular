import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  data$: Observable<any>
  title = 'app';

  constructor(private httpClient:HttpClient){

  }

  ngOnInit(){
this.data$ = this.httpClient.get('http://5be38370d53daf0013250f64.mockapi.io/api/v1/user');

  }
}


