import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child-component2",
  templateUrl: "./child-component2.component.html",
  styleUrls: ["./child-component2.component.scss"]
})
export class ChildComponent2Component implements OnInit {
  @Output() randomPlayer = new EventEmitter<string>();
  constructor() {}

  generateRandomPlayer() {
    let players: string[] = ["Sachin", "Yuvraj", "Saurav", "Dhoni", "Sehwag"];
    let selectedPlayer = players[Math.floor(Math.random() * players.length)];

    console.log("Randomly Selected Player");
    console.log(selectedPlayer);

    this.randomPlayer.emit(selectedPlayer)
  }

  ngOnInit(): void {}
}
