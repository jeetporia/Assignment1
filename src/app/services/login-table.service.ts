import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginTableService {

  private id = new BehaviorSubject<string>('');
  currentID = this.id.asObservable();

  constructor(private http: HttpClient) { 

  }

  changeId(id : string) {
    this.id.next(id);
  }

  getUsers() {
    let url = 'https://reqres.in/api/users?page=1';
    return this.http.get(url);
  }

  getUserDetail(userid){
    let url = 'https://reqres.in/api/users/' + userid;
    console.log('URL IS ' + url)
    return this.http.get(url)
  }
}
