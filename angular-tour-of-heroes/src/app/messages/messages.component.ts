import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  //改為public的原因是，因為我們會再template中繫結(Angular只會繫結到component的公有property)
  constructor(public messageService: MessageService) { }

  ngOnInit() {

  }

}
