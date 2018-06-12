import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit() {
  }

  authenticateUserCall(user){
    this.dataService.authenticateUser(user).subscribe();
    this.router.navigate(['/dashboard']);
  }

}
