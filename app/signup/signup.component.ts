import { Component, OnInit, ViewChild } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular/dataform-directives';
import { UserDataService } from '~/data-services/user-data.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  moduleId: module.id
})


export class SignupComponent implements OnInit {
  public selectedIndex = 0;
  public items: Array<string>;

  
  signUpForm;
  // private _user: RemoteUser;
  @ViewChild('myCommitDataForm') myCommitDataFormComp: RadDataFormComponent;
  constructor(private _page: Page, private userDataService: UserDataService, private routerExtensions: RouterExtensions) {
    
  }

  ngOnInit(): void {
  }

  signUPUser = {
    
    username: "",
    name:"",
    email: "",
    password: "",
    fatherName: "",
    nic: "",
    dateOfBirth: "",
    city: "",
    district: "",
    provience: "",
    country: "",
    phoneRes: "",
    phoneOff: "",
    phoneCell: "",
    holyQuran: "",
    education: "",
    profession: "",
    postalAddress: "",
  };


  options_edu = ["Matriculation", "Diploma", "Intermediate", "Undergraduate", "Graduate","Postgraduate"];

  onPropertyCommitted() {
    if (this.myCommitDataFormComp.dataForm.editedObject) {
      this.signUpForm = this.myCommitDataFormComp.dataForm.editedObject;
    }
  }

  submitForm() {
    console.log(this.signUPUser);

    
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


  public onchange(args: SelectedIndexChangedEventData) {
    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
    this.signUPUser.education = this.options_edu[args.newIndex];
}

}
