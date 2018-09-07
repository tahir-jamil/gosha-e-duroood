import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { SwissArmyKnife, IScreenHeight } from "nativescript-swiss-army-knife";
import { topmost } from "tns-core-modules/ui/frame/frame";
import { ScrollView } from 'tns-core-modules/ui/scroll-view/scroll-view';


import * as _ from "lodash";
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.css'],
  moduleId: module.id
})
export class StatisticsComponent implements OnInit, AfterViewInit {



  constructor(private _page: Page) {
  }
  ngOnInit(): void {
    this._page.actionBarHidden = true;
  }

  ngAfterViewInit(): void {

  }

  pieSource: { Brand: string, Amount: number }[] = [
    { Brand: "Audi", Amount: 10 },
    { Brand: "Audi", Amount: 10 },
    { Brand: "Audi", Amount: 10 },
    { Brand: "Fiat", Amount: 60 },
    { Brand: "BMW", Amount: 24 },
  ];

  onfilterSelect(rangeName) {
    console.log(rangeName);
   let result = _.filter(this.bussinessData, rangeName);
   console.dir(result);
  }

  checkAdult(age) {
    return age >= 18;
  }



  dataItems = ["1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4"];

  statisitcs = [
    { range: "City" },
    { range: "District" },
    { range: "Province" },
    { range: "Country" }]

  bussinessData = [
    {
      "username": "itstahirjamil",
      "name": "tahir jamil",
      "email": "tahirjamil9292@gmail.com",
      "password": "abc123.",
      "fathername": "Jameel",
      "nic": "3510564781557",
      "dateofBirth": "2018-09-19",
      "city": "Lahore",
      "district": "Lahore",
      "provience": "punjab",
      "country": "pakistan",
      "phoneres": "8997648267",
      "phoneoff": "976889680658",
      "phonecell": "4889678001",
      "holyQuran": "0",
      "education": "Masters",
      "profession": "IT professional",
      "postalAddress": "Gajumata"
    },
    {
      "username": "itstahirjamil",
      "name": "tahir jamil",
      "email": "tahirjamil9292@gmail.com",
      "password": "abc123.",
      "fathername": "Jameel",
      "nic": "3510564781557",
      "dateofBirth": "2018-09-19",
      "city": "Gujranwala",
      "district": "Lahore",
      "provience": "punjab",
      "country": "pakistan",
      "phoneres": "8997648267",
      "phoneoff": "976889680658",
      "phonecell": "4889678001",
      "holyQuran": "0",
      "education": "Masters",
      "profession": "IT professional",
      "postalAddress": "Gajumata"
    },
    {
      "username": "itstahirjamil",
      "name": "tahir jamil",
      "email": "tahirjamil9292@gmail.com",
      "password": "abc123.",
      "fathername": "Jameel",
      "nic": "3510564781557",
      "dateofBirth": "2018-09-19",
      "city": "Karachi",
      "district": "Lahore",
      "provience": "punjab",
      "country": "pakistan",
      "phoneres": "8997648267",
      "phoneoff": "976889680658",
      "phonecell": "4889678001",
      "holyQuran": "0",
      "education": "Masters",
      "profession": "IT professional",
      "postalAddress": "Gajumata"
    },
    {
      "username": "tahirawais1",
      "name": "tahir awais",
      "email": "tahirawais142@gmail.com",
      "password": "abc123.",
      "fathername": "khawar",
      "nic": "3410464175337",
      "dateofBirth": "1995-09-30",
      "city": "Lahore",
      "district": "Lahore",
      "provience": "Punjab",
      "country": "Pakistan",
      "phoneres": "3330486681",
      "phoneoff": "3007431729",
      "phonecell": "3330486681",
      "holyQuran": "1",
      "education": "Masters",
      "profession": "IT professional ",
      "postalAddress": "103-B engineers town B Block Lahore "
    }
  ];
}
