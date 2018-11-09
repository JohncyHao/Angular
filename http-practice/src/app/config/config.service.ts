import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = "http://5be38370d53daf0013250f64.mockapi.io/api/v1/user";

  getConfig(){
    return this.http.get(this.configUrl);
  }

  constructor(private http:HttpClient) { }


}
