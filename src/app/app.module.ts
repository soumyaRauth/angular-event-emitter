import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameControlComponent } from './gameControl/gamecontrol.component';
import { TextColorSet } from './directives/textcolor.directive';
import { FontSize } from './directives/fontsize.directive';
import { CenterAlign } from './directives/center-align.directive';



@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    TextColorSet,
    FontSize,
    CenterAlign
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
