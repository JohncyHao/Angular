import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  config;

  showConfig(){
    this.configService.getConfig()
      .subscribe(data=>this.config={
        id:data['id'],
        url:data['avatar']
      });
  }

  constructor(private configService:ConfigService) { }

  ngOnInit() {
    this.showConfig();
  }

}
