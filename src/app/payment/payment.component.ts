import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }
  amount:any
  ngOnInit() {
    this.amount=200
  }
  nextProces(){
    alert("Somthing Is Pending !!")
  }
}
