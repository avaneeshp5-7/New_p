import { Component, OnInit } from '@angular/core';
// import {ShowCartImageServiceService} from "./show-cart-image-service.service";
import { Router } from '@angular/router';
import { Http } from "@angular/http";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userid;email;

  constructor(private cobj:Http,private rout:Router) { }

  ngOnInit() {
  }
  usrname;upass;userdet;m1;m2;fullname;dis;lgn_sup_btn;lpage;showwelcome
funlog(ldata)
{
   if(ldata.valid==false)
   {
    this. m1=" * Don't forget any !"
     this.m2=" * Don't forget any !"
     this.usrname="";
     this.upass="";
   }
   else
   {
  var logData={userid:this.usrname,password:this.upass}
  this.cobj.post("/register/logData",logData).subscribe(this.logcback)
}
}
logcback=(dt)=>{
     this.userdet=(JSON.parse(dt._body))
     if(this.userdet.length==1){
     localStorage.setItem("login_check","1")
     localStorage.setItem("userdata",this.userdet)
     localStorage.setItem("fullname",   this.userdet[0].fullname)
     localStorage.setItem("email",this.userdet[0].email)
     localStorage.setItem("Contact",this.userdet[0].Contact)
     localStorage.setItem("userid",this.userdet[0]._id)
     this.email=localStorage.getItem("email")
     this.fullname=localStorage.getItem("fullname")
     alert('User LoggedIn')
     window.location.href=""
    }
  else
  {
    alert("try agin ! !")
   }
}
funforgote(){
  this.rout.navigateByUrl("/send-otp-on");
}
google_login()
{
  this.cobj.get("/register/google_log").subscribe(dt=>{
    alert('Logged');
  })
}
}
