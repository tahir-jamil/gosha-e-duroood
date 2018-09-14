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
export class StatisticsComponent implements OnInit {


  statisticsData = [];
  rangeList = [];
  chartData = [];


  constructor(private _page: Page, private userData : UserDataService) {
  }

  ngOnInit(): void {
    this._page.actionBarHidden = true;
    this.onfilterSelect("city");
    this.statisticsData = this.userData.rangeListFilteredData;

  }


  pieSource: { Brand: string, Amount: number }[] = [
    { Brand: "Audi", Amount: 10 },
    { Brand: "Audi", Amount: 10 },
    { Brand: "Audi", Amount: 10 },
    { Brand: "Fiat", Amount: 60 },
    { Brand: "BMW", Amount: 24 },
  ];

  onfilterSelect(rangeName) {
    this.rangeList = this.statisticsData;
    
    let sortedArray = _.orderBy(this.rangeList, ['count'], ['desc']);
    this.chartData =  _.slice(sortedArray, 0, 5);
  }


  // dataItems = ["1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4"];

  statisitcs = [
    { range: "city" },
    { range: "district" },
    { range: "provience" },
    { range: "country" }]



}
