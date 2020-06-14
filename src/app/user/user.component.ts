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

   
   }

  ngOnInit() {
    this.userService.currentID.subscribe(gotID=> {
      this.userID = gotID;
    })
    this.fetchData(this.userID)
  }

  fetchData(id) {
    this.userService.getUserDetail(id).subscribe(data=>{
      this.allData = data['data'];
      this.adData = data['ad']
    })
  }

}
