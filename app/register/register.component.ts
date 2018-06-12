import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
  }
  registerUserCall(user){
    this.dataService.registerUser(user).subscribe();
    this.router.navigate(['/']);
  }

}
