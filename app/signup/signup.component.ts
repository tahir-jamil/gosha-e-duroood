import { Component, OnInit, ViewChild } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular/dataform-directives';
import { UserDataService } from '~/data-services/user-data.service';
import { RouterExtensions } from 'nativescript-angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  moduleId: module.id
})

export class SignupComponent implements OnInit {

  signUpForm;
  // private _user: RemoteUser;
  @ViewChild('myCommitDataForm') myCommitDataFormComp: RadDataFormComponent;
  constructor(private _page: Page, private userDataService: UserDataService, private routerExtensions: RouterExtensions) {
  }

  ngOnInit(): void {
  }

  signUPUser = {
    name: "",
    username: "",
    fatherName: "",
    email: "",
    dateOfBirth: "",
    password: "",
    union_council: "",
    Tehsil: "",
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
    holyQuran: true,
  };


  options_edu = ["Post Graduation", "Under Graduation ", "Graduation", "Matriculation", "Diploma"];

  onPropertyCommitted() {
    if (this.myCommitDataFormComp.dataForm.editedObject) {
      this.signUpForm = this.myCommitDataFormComp.dataForm.editedObject;
    }
  }

  submitForm() {
    console.log("submit form");
    this.userDataService.postData(this.signUpForm).subscribe(res => {
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
