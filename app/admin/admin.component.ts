import { Component, OnInit } from '@angular/core';
import { UserDataService } from '~/data-services/user-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  moduleId: module.id
})
export class AdminComponent implements OnInit {

  adminData;

  constructor(private userData: UserDataService) { }

  ngOnInit() {
  }

  showAdmin() {
    this.userData.getAdmin().subscribe(res => {
      this.adminData = res;

    }, error => {
      console.dir(error);
    });
  }

}