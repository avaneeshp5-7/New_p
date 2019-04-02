import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from "@angular/http";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private cobj:Http,private rout:Router) { }

  ngOnInit() {
  }
fname;lname;userid;email;password;rpassword;contact;address;saddress;mm1;mm2;mm3;mm4;mm5;mm6;mm7;mm8;mm9
funRegister(regval)
{
  if(regval.valid==false)
  {
   this.mm1=" * First name "
   this.mm2=" * Last name  "
   this.mm3=" * Enter Email  "
   this.mm4=" * User id "
   this.mm5=" * Enter Password "
   this.mm6=" * Re-password"
   this.mm7=" * Enter Contact "
   this.mm8=" * Enter address "
   this.mm9=" * Shipping address"
  }
  else
  {
  var userData={fullname:this.fname,email:this.email,userid:this.userid,
  password:this.password,rpassword:this.rpassword,Contact:this.contact,
  address:{BillindAdsress:[{name:this.fname},{Contact:this.contact},{biladdress:this.address}],
  Shipping:[{lname:this.lname},{Contact:this.contact},{shipaddress:this.saddress}]}}
  this.cobj.post("/register/userReg",userData).subscribe(this.usercback)
}
}
  usercback=(dt)=>{
    console.log(dt['_body']);
  if(dt['_body']['success']==true){
    this.fname="";this.userid="";this.email="";this.password="";this.contact="";this.address="";this.fname="";this.rpassword="";
    this.rout.navigateByUrl('/user-login-securly'); 
  }
 else{
   alert(dt['_body'][0]['message']);
 }
}
psms;
checkPass(rpwd){
if(rpwd!=this.rpassword)
{
  alert(" Password is not matched !")
}
else
{
  this.psms="";
}
}
}
