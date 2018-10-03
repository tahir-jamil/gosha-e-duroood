import { Component, OnInit } from '@angular/core';
import { SelectedIndexChangedEventData } from "nativescript-drop-down";

@Component({
  selector: 'app-submitDurood',
  templateUrl: './submitDurood.component.html',
  styleUrls: ['./submitDurood.component.css'],
  moduleId: module.id
})
export class SubmitDuroodComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  public selectedIndex = 1;
  public items: Array<string>;

  constructor() {
    this.items = [];
    for (var i = 0; i < 5; i++) {
      this.items.push("data item " + i);
    }
  }
   public onchange(args: SelectedIndexChangedEventData) {
    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
  }

  public onopen() {
    console.log("Drop Down opened.");
  }

  public onclose() {
    console.log("Drop Down closed.");
  }

}

