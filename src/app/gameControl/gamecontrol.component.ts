import { Component } from '@angular/core';


@Component({
    selector:'game-control',
    templateUrl:'./gamecontrol.component.html',
    styleUrls:['./gamecontrol.component.scss']
})
export class GameControlComponent{
second:number=0;
ref;
secondFlag:boolean=false
    constructor(){}

    
    startGame(){
        this.ref=setInterval(()=>{
            this.second+=1;
        console.log(this.second);
        },1000)
    }


    stopGame(){
        clearInterval(this.ref)
    }
}