import { Component, OnInit, ViewChild } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular/dataform-directives';
import { UserDataService } from '~/data-services/user-data.service';
import { RouterExtensions } from 'nativescript-angular/router';
import * as ModalPicker from 'nativescript-modal-datetimepicker';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  moduleId: module.id
})

export class SignupComponent implements OnInit {

  birthday: string;
  // private _user: RemoteUser;
  // @ViewChild('myCommitDataForm') myCommitDataFormComp: RadDataFormComponent;
  constructor(private _page: Page, private userDataService: UserDataService, private routerExtensions: RouterExtensions) {
  }

  ngOnInit(): void {
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

  // onPropertyCommitted() {
    // if (this.myCommitDataFormComp.dataForm.editedObject) {
    //   this.signUpForm = this.myCommitDataFormComp.dataForm.editedObject;
    // }
  // }
  

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

    this.userDataService.postData(this.signUpUser).subscribe(res => {
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
