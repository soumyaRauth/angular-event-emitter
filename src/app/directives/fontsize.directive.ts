import { Directive, ElementRef, Renderer2 } from '@angular/core';


@Directive({
    selector:'[fontSizes]'
})
export class FontSize{
constructor(private elemRef:ElementRef, private render:Renderer2){

}

ngOnInit(){
    console.log(this.elemRef.nativeElement.style);
    
    this.render.setStyle(this.elemRef.nativeElement,'fontSize','5em');
}
}