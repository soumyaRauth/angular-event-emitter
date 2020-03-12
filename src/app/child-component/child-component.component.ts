import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Cricketer } from "../parent-component/parent-component.model";

@Component({
  selector: "app-child-component",
  templateUrl: "./child-component.component.html",
  styleUrls: ["./child-component.component.scss"]
})
export class ChildComponentComponent implements OnInit {
  nameOfCricketer: string = "";
  @Output() crickname=new EventEmitter<string>()
  constructor() {}

  /**
   * Get the name of the cricketer
   */
  addCricketer() {
    console.log("Hello Cricketer");
    console.log(this.nameOfCricketer);
    this.crickname.emit(this.nameOfCricketer);
    this.nameOfCricketer='';

  }

  ngOnInit(): void {}
}
