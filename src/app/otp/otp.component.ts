import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http"
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor( public http:Http) {}
  otpdat;
  ngOnInit() {
     this.http.get("searchapi/getOTP").subscribe(this.otpcb)
  }
  otpcb=(dt)=>{
    this.otpdat=(dt._body)
     alert(this.otpdat)
    console.log(this.otpdat)
  }
  otp;email
  funNew(){
    var odata={OTP:this.otp,email:this.email}
   this.http.post("searchapi/genOTP",odata).subscribe(this.otpcbac)
  }
  otpcbac=(dt)=>{
    alert(dt._body)
  }
}
