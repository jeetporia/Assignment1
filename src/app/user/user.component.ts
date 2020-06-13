import { Component, OnInit, Input } from '@angular/core';
import { LoginTableService } from '../services/login-table.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userID :any;
  allData :any;
  adData :any;
  constructor(private userService:LoginTableService) {
    debugger;
    this.userService.activeID.subscribe(id=>{
      this.userID = id;
      this.fetchData(this.userID);
    });
   }

  ngOnInit() {
   
  }

  fetchData(id) {
    this.userService.getUserDetail(id).subscribe(data=>{
      this.allData = data['data'];
      this.adData = data['ad']
    })
  }

}
