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
    setInterval(()=>{
      this.refreshCycle();},1000);
  }

  userData;

  toggleVar: boolean = true;
  toggleVar1: boolean = false;

  getUserCall(){
    this.dataService.getUser().subscribe(data=>{
      this.userData=data;
      console.log(data);
    })
  }

  toggleVarfunc1(){
    this.toggleVar1 = !this.toggleVar1;
  }

  refreshCycle(){
    this.toggleVar = false;
    setTimeout(()=>{this.toggleVar = true;},1);
    }
}
