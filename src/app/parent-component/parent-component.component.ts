import { Component, OnInit } from "@angular/core";
import { Cricketer } from "./parent-component.model";
@Component({
  selector: "app-parent-component",
  templateUrl: "./parent-component.component.html",
  styleUrls: ["./parent-component.component.scss"]
})
export class ParentComponentComponent implements OnInit {
  // cricketer:Cricketer[]=[
  //   new Cricketer("Saching"),
  //   new Cricketer("Sakib"),
  //   new Cricketer("Steve Wagh")
  // ]

  cricketersAdded:string[]=[]

  constructor() {}

  getCrickName(crickName) {
    console.log("From Parent Component");
    console.log(crickName);
    this.cricketersAdded.push(crickName);
  }

  deleteCricketer(i){
    console.log(i);
    if (i>-1){
      this.cricketersAdded.splice(i,1);
    }
    
    
  }

  ngOnInit(): void {}
}
