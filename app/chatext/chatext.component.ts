import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chatext',
  templateUrl: './chatext.component.html',
  styleUrls: ['./chatext.component.css']
})
export class ChatextComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getMessage();
  }

  messagesReceived;

  getMessage(){
    this.dataService.getMSG().subscribe(data=>{
      this.messagesReceived = data;
    });
}

}
