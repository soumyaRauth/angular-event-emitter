import { Directive, ElementRef, Renderer2 } from '@angular/core';



@Directive({
    selector:'[centerAlign]'
})
export class CenterAlign{
    constructor(private el:ElementRef, private render:Renderer2){

    }

    ngOnInit(){
        this.render.setStyle(this.el.nativeElement,'textAlign','center')
        this.render.setStyle(this.el.nativeElement,'fontSize','5em')
        this.render.setStyle(this.el.nativeElement,'fontFamily','monospace')
    }

}