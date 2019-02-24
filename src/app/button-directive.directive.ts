import { Directive } from '@angular/core';
import { ElementRef,Renderer2,HostListener } from "@angular/core"

@Directive({
  selector: '[appButtonDirective]'
})
export class ButtonDirectiveDirective {

  constructor(public rend:Renderer2, public ele:ElementRef) {
    rend.setStyle(ele.nativeElement,"color","red"),
    rend.setStyle(ele.nativeElement,"background-color","green")
   }  
}
