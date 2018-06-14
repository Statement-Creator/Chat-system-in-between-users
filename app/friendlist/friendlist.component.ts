import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.css']
})
export class FriendlistComponent implements OnInit {

  constructor(private dataService:DataService) { }

  friends;

  ngOnInit() {
    this.getFriendsCall();
    console.log(this.friends);
  }
  getFriendsCall(){
    this.dataService.getFriends().subscribe(data=>{this.friends=data;});
  }
  addFriendsCall(friend){
    this.dataService.addFriend(friend).subscribe();
  }

}
