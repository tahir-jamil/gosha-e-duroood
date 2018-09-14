import { Component, OnInit, ViewChild } from '@angular/core';
import { RemoteUser } from '~/signup/user-data-service';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular/dataform-directives';
import { BehaviorSubject } from 'rxjs';
import { UserDataService } from '~/data-services/user-data.service';
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums"; // used to describe at what accuracy the location should be get
import { Console } from '@angular/core/src/console';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  moduleId: module.id
})

export class SignupComponent implements OnInit {

  // private _user: RemoteUser;
  titleName: string = "Personal Information";
  @ViewChild('myCommitDataForm') myCommitDataFormComp: RadDataFormComponent;
  constructor(private _page: Page, private userData: UserDataService) {
  }

  ngOnInit(): void {

  }

  signUPUser = {
    name: "",
    username: "",
    email: "",
    Password: "",
    city: "",
    district: "",
    provience: "",
    country: "",
    phoneRes: 0,
    phoneOff: 0,
    phoneCell: 0,
    holyQuran: true,
    education: "",
    dateOfBirth: "",
    fatherName: "",
    profession: "",
    nic: "",
    postalAddress: "",


  };


  options_edu = ["Post Graduation", "Under Graduation ", "Graduation", "Matriculation", "Diploma"];

  onPropertyCommitted() {
    if (this.signUPUser.name && this.signUPUser.username && this.signUPUser.email && this.signUPUser.Password && this.signUPUser.city && this.signUPUser.country)
      UserDataService.setString("bussinessData", JSON.stringify(this.signUPUser));

  }
  
  // submit() {
  //   console.log("submit form");
  //   console.dir(this.myCommitDataFormComp.dataForm.editedObject);


  // }





  //   this.items = new BehaviorSubject([
  //     {
  //       title: 'Personal Information',
  //       items: []
  //     },


  //     {
  //      title: 'Education and Profession',
  //       items: []
  //      },
  //      {
  //        title: 'Address',
  //        items: []
  //      },
  //      {
  //        title: 'Contact',
  //        items: []
  //      },
  //      {
  //        title: 'Others',
  //        items: []



  //   ]);
  //   this.numItems = this.items.value.length;
  // }



  // loadedImage($event) {
  //   console.log(`loaded image ${JSON.stringify($event)}`);
  // }

  // prevPage() {
  //   // this.debugObj(this.pager);
  //   const newIndex = Math.max(0, this.currentPagerIndex - 1);
  //   this.currentPagerIndex = newIndex;
  //   this.latestReceivedIndex = newIndex;
  // }

  // nextPage() {
  //   const newIndex = Math.min(this.numItems - 1, this.currentPagerIndex + 1);
  //   this.currentPagerIndex = newIndex;
  //   this.latestReceivedIndex = newIndex;
  // }

  // onIndexChanged($event) {
  //   this.latestReceivedIndex = $event.newIndex;
  //   this.titleName = this.items[this.latestReceivedIndex].title;
  // }

  // pageChanged(index: number) {
  //   console.log(`pageChanged ${JSON.stringify(index)}`);
  // }

  // get getTitle() {
  //   if(!!this.items[this.currentPagerIndex].title) {
  //     return this.items[this.currentPagerIndex].title;
  //   }
  // }
}
