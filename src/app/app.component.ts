import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'parentChild';
  constructor(){

  }


  ngOnDestroy(){
    console.log("ON destroy triggered");
    
  }
}



