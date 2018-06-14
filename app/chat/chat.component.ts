import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
  } 

  postMessage(msg){
    this.dataService.postMSG(msg).subscribe();
  }

}
