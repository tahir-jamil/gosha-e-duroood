import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  moduleId: module.id
})
export class StatisticsComponent implements OnInit {


  constructor(private _page: Page) {
  }
  ngOnInit(): void {
    this._page.actionBarHidden = true;
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
