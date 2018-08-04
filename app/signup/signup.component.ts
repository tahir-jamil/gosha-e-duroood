import { Component, OnInit, ViewChild } from '@angular/core';
import { RemoteUser } from '~/signup/user-data-service';
import { Page } from 'tns-core-modules/ui/page/page';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular/dataform-directives';
import { BehaviorSubject } from 'rxjs';

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

  ngOnInit(): void {
    // this._user = new RemoteUser("", "", "", "", "", "", null, null, null, false);
  }
  
  signUPUser = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    district: "",
    country: "",
    phoneRes: "",
    phoneOff: "",
    phoneCell: "",
    holyQuran: "",
  };

  // options_edu = ["Post Graduation", "Under Graduation ", "Graduation", "Matriculation", "Diploma"];

  onPropertyCommitted() {
    if (this.myCommitDataFormComp.dataForm.editedObject) {
      console.dir(this.myCommitDataFormComp.dataForm.editedObject);
    }
  }

  submit() {
    console.log("submit form");
    console.dir(this.myCommitDataFormComp.dataForm.editedObject);
  }

  // numItems;
  // currentPagerIndex = 0;
  // latestReceivedIndex = 0;
  // items: any;

  // @ViewChild('pager') pager: any;
  // // tslint:disable-next-line:semicolon
  // public templateSelector = (item: any, index: number, items: any) => {
  //   return index % 2 === 0 ? 'even' : 'odd';
  // }

  constructor(private _page: Page) {
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
  }


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
