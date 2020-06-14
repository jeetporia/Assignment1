import { Component, OnInit, Output } from '@angular/core';
import { LoginTableService } from '../services/login-table.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagePath :any;
  userData :any;
  constructor(private loginService : LoginTableService, private router : Router) {

   }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.loginService.getUsers().subscribe(user=>{
      this.userData = user['data']
    })
  }

  sendID(id) {
    this.loginService.changeId(id)
    this.router.navigate(['/user']);
  }

}
