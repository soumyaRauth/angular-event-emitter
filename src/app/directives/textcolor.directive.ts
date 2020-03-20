import { Directive, ElementRef, OnInit, Input, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[textColor]"
})
export class TextColorSet implements OnInit {
@HostBinding('style.backgroundColor') backGroundColor:string
  constructor(private render: Renderer2, private elemRef: ElementRef) {}

  ngOnInit() {
      this.render.setStyle(this.elemRef.nativeElement,'color','blue');
      this.render.setStyle(this.elemRef.nativeElement,'textAlign','center')
  }

  @HostListener('mouseenter') mouseOver(eventData:Event){
    this.render.setStyle(this.elemRef.nativeElement,'color','red');
    this.backGroundColor='green';
  }

  @HostListener('mouseleave') mouseLeave(eventData:Event){
      this.render.setStyle(this.elemRef.nativeElement,'color','blue');
      this.backGroundColor='yellow';
  }
}
