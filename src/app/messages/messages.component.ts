import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements OnInit {

  constructor(public messagesService: MessagesService) { }

  ngOnInit(): void {
    
  }
 

}
