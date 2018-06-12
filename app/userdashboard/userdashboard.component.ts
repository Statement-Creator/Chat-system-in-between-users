import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getUserCall();
    this.getMessage();
  }

  userData;
  messagesReceived;

  toggleVar: boolean = false;

  getUserCall(){
    this.dataService.getUser().subscribe(data=>{
      this.userData=data;
      console.log(data);
    })
  }

  toggleVarfunc(){
    this.toggleVar = !this.toggleVar;
  }

  postMessage(msg){
    this.dataService.postMSG(msg).subscribe();
  }

  getMessage(){
    this.dataService.getMSG().subscribe(data=>{
      this.messagesReceived = data;
    })
  }

}
