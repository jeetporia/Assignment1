import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  wrongCredentials : boolean = false;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  login(userName, password) {
    // if(userName == 'eve.holt@reqres.in' && password == 'cityslicka') {
    //   this.wrongCredentials = false;
    //   this.router.navigate(['/home']);
    // } else {
    //   this.wrongCredentials = true;
    // }
    // remove this
    if(userName == 'jeet' && password == '123') {
      this.wrongCredentials = false;
      this.router.navigate(['/home']);
    } else {
      this.wrongCredentials = true;
    }
    
  }

}
