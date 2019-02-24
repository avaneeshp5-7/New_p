import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Router} from "@angular/router"
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  model:any;
  cond:any;
  condition:any;
  otpdat:any;
  email;password;otp
  constructor(public http:Http,private nav:Router) { }
  ngOnInit() {
  }
  ResetPassword(){
    this.cond=parseInt(this.otp);
    this.model={password:this.password}
    this.http.post("searchapi/resetPassword" , [{otp:this.cond,email:this.email},this.model]).subscribe(this.otpcb);
    console.log(this.model);
  }
  otpcb=(dt)=>{
    this.otpdat=JSON.parse(dt._body)
     if(this.otpdat.success==true)
     {
       alert('Your Pasword Updataed');
     }
     else{
       alert('This is Invalid Email Id or OTP');
     }
  }
}
