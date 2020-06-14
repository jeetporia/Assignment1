import { Component } from '@angular/core';
import { LoginTableService } from '../app/services/login-table.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'assignment1';
  userData :any;
  constructor(private loginService : LoginTableService) {
    this.getFooter()
  }

  getFooter() {
    this.loginService.getUsers().subscribe(user=>{
      this.userData = user['ad']
    })
  }
 
}
