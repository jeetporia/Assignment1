import { Component, OnInit } from '@angular/core';
import { LoginTableService } from '../services/login-table.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id : number;
  emailId : string;
  firstName : string;
  lastName : string;
  imagePath :any;
  userData :any;
  constructor(private loginService : LoginTableService) {

   }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.loginService.getUsers().subscribe(user=>{
  
      this.userData = user['data']
      alert(JSON.stringify(this.userData));
    })
  }

}
