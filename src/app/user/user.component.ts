import { Component, OnInit } from '@angular/core';
import { LoginTableService } from '../services/login-table.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:LoginTableService) { }

  allData :any;
  adData :any;
  ngOnInit() {
      this.fetchData();
  }

  fetchData() {
    this.userService.getUserDetail(1).subscribe(data=>{
      this.allData = data['data'];
      this.adData = data['ad']
    })
  }

}
