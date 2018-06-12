import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:Http) { }

  //register and login
  registerUser(user){
    let headers= new Headers();
    headers.append('content-type','application/json');
    return this.http.post('http://localhost:3000/api/register',user,{headers:headers}).pipe(map(res=>res.json()));
  }
  authenticateUser(user){
    let headers = new Headers();
    headers.append('content-type','application/json');
    return this.http.post('http://localhost:3000/api/login',user,{headers:headers}).pipe(map(res=> res.json()));
  }
  //get user info
  getUser(){
    return this.http.get('http://localhost:3000/api/dashboard').pipe(map(res=> res.json()));
  }
  //post a message
  postMSG(msg){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/api/chat',msg,{headers:headers}).pipe(map(res=>res.json()));
  }
  //get message
  getMSG(){
    return this.http.get('http://localhost:3000/api/chat').pipe(map(res=>res.json()));
  }

}
