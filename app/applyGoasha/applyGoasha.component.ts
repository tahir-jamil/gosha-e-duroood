import { Component, OnInit, ViewChild } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { UserDataService } from '~/data-services/user-data.service';
import { RouterExtensions } from 'nativescript-angular/router';
import * as ModalPicker from 'nativescript-modal-datetimepicker';

@Component({
  selector: 'app-applyGoasha',
  templateUrl: './applyGoasha.component.html',
  styleUrls: ['./applyGoasha.component.css'],
  moduleId: module.id,
})
export class ApplyForGoshaENasheenComponent implements OnInit {
  
  birthday: string;
  constructor(private _page: Page, private userDataService: UserDataService, private routerExtensions: RouterExtensions) {
  }

  ngOnInit(): void {
    this._page.actionBarHidden = true;
  }

  signUpUser = {
    name: "",
    fatherName: "",
    
    username: "",
    email: "",
    password: "",
    
    dateOfBirth: "",
    union_council: "",
    city: "",
    district: "",
    provience: "",
    country: "",
    education: "",
    profession: "",
    phoneRes: "",
    phoneOff: "",
    phoneCell: "",
    nic: "",
    postalAddress: "",
    holyQuran: false,
  };


  toggleCheck() {
    setTimeout(() => {
      this.signUpUser.holyQuran = !this.signUpUser.holyQuran;
    }, 200);
  }
  // options_edu = ["  Post Graduation", "Under Graduation ", "Graduation", "Matriculation", "Diploma"];

  

  pickDate() {
    const picker = new ModalPicker.ModalDatetimepicker();
    picker.pickDate({
      title: 'Please enter your birthday',
      theme: 'dark',
      maxDate: new Date(),
      is24HourView: false
    }).then((result) => {
      this.signUpUser.dateOfBirth = result['year'] + '-' + result['month'] + '-' + result['day'];
      console.dir(this.birthday);
    }).catch((error) => {
      console.log('Error: ' + error);
    });
  }

  submitForm() {
    console.dir(this.signUpUser);


    this.userDataService.postGoasha(this.signUpUser).subscribe(res => {
      console.dir(res);
      this.routerExtensions.navigate(['/login'], {
        transition: {
          name: 'fade',
          curve: 'linear'
        }
      });
    }, (error) => {
      console.dir(error);
    });
  }

}

