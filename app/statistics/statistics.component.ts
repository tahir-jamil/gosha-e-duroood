import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { SwissArmyKnife, IScreenHeight } from "nativescript-swiss-army-knife";
import { topmost } from "tns-core-modules/ui/frame/frame";
import { ScrollView } from 'tns-core-modules/ui/scroll-view/scroll-view';


import * as _ from "lodash";
import { UserDataService } from '~/data-services/user-data.service';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.css'],
  moduleId: module.id
})
export class StatisticsComponent implements OnInit, AfterViewInit {


  statisticsData = [];


  constructor(private _page: Page, private userData : UserDataService) {
  }

  ngOnInit(): void {
    this._page.actionBarHidden = true;
    this.onfilterSelect("city");
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
     this.statisticsData = _.map(this.userData.bussinessData, function(o){
        if(rangeName ==  "city") {
          return {dataList: o.city}
        }
        else if(rangeName ==  "district") {
          return {dataList: o.district}
        }
        else if(rangeName == "country") {
          return {dataList: o.country}
        }
        else if(rangeName == "provience") {
          return {dataList: o.provience}
        }
     });
  }


  dataItems = ["1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4"];

  statisitcs = [
    { range: "city" },
    { range: "district" },
    { range: "provience" },
    { range: "country" }]



}
