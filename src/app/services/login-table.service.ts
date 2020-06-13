import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginTableService {
  activeID = new Subject<any>();
  constructor(private http: HttpClient) { 

  }

  getUsers() {
    let url = 'https://reqres.in/api/users?page=1';
    return this.http.get(url);
  }

  getUserDetail(userid){
    debugger;
    let url = 'https://reqres.in/api/users/' + userid;
    console.log('URL IS ' + url)
    return this.http.get(url)
  }
}
