
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class ShowCartImageServiceService  {
  tot_cart_items; public messageSource; public currentMessage
  constructor() {   
    if(localStorage.getItem("cart_items")!=null)
    {
    var arr=localStorage.getItem("cart_items")
    arr=arr.replace(/\\/g,"")
    arr=arr.replace(/"{/g,"{") 
    arr=arr.replace(/}"/g,"}")
    arr=JSON.parse(arr)
    this.tot_cart_items=arr.length.toString()
    this.messageSource = new BehaviorSubject(this.tot_cart_items);
    this.currentMessage = this.messageSource.asObservable();
  }
  else 
  {
   this.messageSource = new BehaviorSubject("0");
   this.currentMessage = this.messageSource.asObservable();
  }
  }
   changeMessage(message: string) {
    this.messageSource.next(message)
  }
} 
 