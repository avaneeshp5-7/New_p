import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router"
@Component({
  selector: 'app-send-otp',
  templateUrl: './send-otp.component.html',
  styleUrls: ['./send-otp.component.css']
})
export class SendOtpComponent implements OnInit {
  otpdat:any;
  email:any;
  constructor(public http:Http,private nav:Router) { }
  ngOnInit() {
   
 }
 funNew(){
   //console.log(this.email);
  this.http.post("searchapi/getOTP",{email:this.email}).subscribe(this.otpcb);
 }
 otpcb=(dt)=>{
   this.otpdat=JSON.parse(dt._body)
    if(this.otpdat.success==true)
    {
      alert('Your Valid OTP : ' + this.otpdat.otp);
      this.nav.navigateByUrl('/create-new-password')
    }
    else{
      alert('This i Invalid Email Id')
    }
 }
}
