import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { SwissArmyKnife, IScreenHeight } from "nativescript-swiss-army-knife";
import { topmost } from "tns-core-modules/ui/frame/frame";
import { ScrollView } from 'tns-core-modules/ui/scroll-view/scroll-view';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.css'],
  moduleId: module.id
})
export class StatisticsComponent implements OnInit, AfterViewInit {

  @ViewChild('tagView') scrollView: ElementRef;

  constructor(private _page: Page) {
  }
  ngOnInit(): void {
    this._page.actionBarHidden = true;
  }

  ngAfterViewInit(): void {
    const scrollV = this.scrollView.nativeElement;
    setTimeout(function () {
      SwissArmyKnife.removeHorizontalScrollBars(scrollV);
    }, 10);
  }

  pieSource: { Brand: string, Amount: number }[] = [
    { Brand: "Audi", Amount: 10 },
    { Brand: "Audi", Amount: 10 },
    { Brand: "Audi", Amount: 10 },
    { Brand: "Fiat", Amount: 60 },
    { Brand: "BMW", Amount: 24 },
  ];

  onfilterSelect() {
    console.log("working");

  }

  dataItems = ["1", "2", "3", "4", "1", "2", "3", "4", "1", "2", "3", "4"];


}
