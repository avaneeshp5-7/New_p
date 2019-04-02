import { Component, Inject,OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";
import { Http } from "@angular/http";
import $ from "jquery"
import { allResolved } from 'q';
import {ShowCartImageServiceService} from "./show-cart-image-service.service"
import { Router } from '@angular/router';

var myReg = [
  trigger("regfrm", [
    // ==================== Login And Regisrtation Form =============================== //
    state("visible", style({ top: "60px" })),
    state("invisible", style({ top: "-1600px" })),
    transition("visible <=> invisible", animate("500ms ease-in")),
    // login//===================
    state("show", style({ top: "60px" })),
    state("hide", style({ top: "-1600px" })),
    transition("show <=> hide", animate("500ms ease-out")),
  ])
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [myReg]
})
export class AppComponent {
msg:string="0";fullname;arr;
  constructor(@Inject(Http) public cobj,public show_cart_icon_service:ShowCartImageServiceService,public rout:Router) {
    this.getCatRec();
  //  alert(JSON.parse(localStorage.getItem('cart_items').length))
}
searchdata="abcd"
login_display=true
welcome_display=false
dis=false
txtsearch;
fun_search_product(){
 //alert( this.txtsearch)
 if(this.txtsearch.length==0)
 {
  this.tmpforsearch=false
 }
 else{
 var ob={pname:this.txtsearch}
 this.cobj.post("/searchapi/searchproduct",ob).subscribe(
   dt=>{
    this.searchdata=JSON.parse(dt._body)
   }
 )
 }
}
tmpforsearch=false;
///////
bcolor="blue"
search_keyup(){
  //alert("ys")
  this.tmpforsearch=true
}
fun_over_style(t){
t.style.backgroundColor="lightblue"
}
fun_out_style(t){
t.style.backgroundColor="lightblue"
}
fun_search_out(){
//alert("hi")
this.tmpforsearch=false;
}
////////
usid;
ngOnInit(){
  this.usid=localStorage.getItem("userid")
if(localStorage.getItem("email")!=null)
{
  this.email=localStorage.getItem("email")
  this.fullname=localStorage.getItem("fullname")
  this.dis=true
  this.contact=localStorage.getItem("Contact")
}

/////////// For showing Cart item in Cart Icons
  this.show_cart_icon_service.currentMessage.subscribe(message => this.msg = message)
  if(localStorage.getItem("login_check")!=null)
  {
    this.lgn_sup_btn()
    this.showwelcome()  
  }
  else{
    //alert("b")
    this.login_display=true;
    this.welcome_display=true
     }  
}




  title = 'app';
  rpage = "invisible"; reg="rsh";/*bodystate="bshow" */
  funReg() {
    this.rpage = "visible"
    this.lpage = "hide"
  }
  lpage = "hide"
  logReg() {
    this.lpage = "show"
    this.rpage = "invisible"
  }
  getcat;getsub;ssubdata;prodata;
  getCatRec() {
    this.cobj.get("/category/getcato").subscribe(this.catcab)
  }
  catcab = (dt) => {
    console.log('menu data',dt);
    this.getcat = JSON.parse(dt._body)
    this.cobj.post("/category/subcat").subscribe(this.subcback)
  }
  subcback = (dt) => {  
    this.getsub = JSON.parse(dt._body)
    this.cobj.get("/category/ssub").subscribe(this.brdbck)
    this.cobj.get("/category/products").subscribe(this.procback)
  }
  brdbck=(dt)=>{
    this.ssubdata=JSON.parse(dt._body) 
    //console.log(this.ssubdata)
  }
  procback=(dt)=>{
    this.prodata=JSON.parse(dt._body)
  }
//========================== Registrations =====================//
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

   //console.log(userData)
  this.cobj.post("/register/userReg",userData).subscribe(this.usercback)
}
}
  usercback=(dt)=>{
  alert(dt._body)
  this.fname="";this.userid="";this.email="";this.password="";this.contact="";this.address="";this.fname="";this.rpassword="";
  window.location.href=""
  
}
// =========================== Log In Mod ===========================//

// usrname;upass;userdet;m1;m2;
// funlog(ldata)
// {
//    if(ldata.valid==false)
//    {
//     this. m1=" * Don't forget any !"
//      this.m2=" * Don't forget any !"
//      this.usrname="";
//      this.upass="";
//    }
//    else
//    {
//   var logData={userid:this.usrname,password:this.upass}
//   this.cobj.post("/register/logData",logData).subscribe(this.logcback)
// }
// }
// logcback=(dt)=>{
//      this.userdet=(JSON.parse(dt._body))
//      if(this.userdet.length==1){
//      localStorage.setItem("login_check","1")
//      localStorage.setItem("userdata",this.userdet)
//      localStorage.setItem("fullname",   this.userdet[0].fullname)
//      localStorage.setItem("email",this.userdet[0].email)
//      localStorage.setItem("Contact",this.userdet[0].Contact)
//      localStorage.setItem("userid",this.userdet[0]._id)
//      this.email=localStorage.getItem("email")
//      this.fullname=localStorage.getItem("fullname")
//      this.dis=true
//      this.lgn_sup_btn()
//      this.showwelcome()
//      this.lpage = "hide";
//      window.location.href=""
//     }
//   else
//   {
//     alert("try agin ! !")
//    }
// }

logOut(){
  localStorage.removeItem("email")
  localStorage.removeItem("Contact")
  localStorage.removeItem("fullname")
  localStorage.removeItem("userid")
  localStorage.removeItem("userdata")
  localStorage.removeItem("login_check")
  this.rout.navigateByUrl("/")  
  window.location.href=""
}

showUserProfile(){
//alert("j query")
  $(".drpprof").show("slow")
}
proedit(userdata){
$(".drpprof").hide("slow")
this.rout.navigateByUrl("/profile")
}
fun_cart_detail(){
//alert("Hi")
this.rout.navigateByUrl('/cartdet')
}
fun_clear_cart_detail(){
  if(localStorage.getItem("cart_items"))
  {
    localStorage.removeItem("cart_items")
    this.show_cart_icon_service.changeMessage(null)
    alert("Cart is empty")
    window.location.href="";
  }
}
lgn_sup_btn(){
  $(".lgn_sup_btn").hide(100)
 }
showwelcome(){
  //alert("hii ")
  $(".showwelcome").show(100)
}

//================== Search detals =====================//
searchDetial(pid){
  this.rout.navigateByUrl("/prodetail;proid="+pid)
 this.fun_search_out()
}
shopp_histry(){
  this.rout.navigateByUrl("/shopp;userid="+this.usid)
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

toLogin(){
  this.rout.navigateByUrl('/user-login-securly');
}
toRegister(){
  this.rout.navigateByUrl('/new-user-regitration');
}
funforgote(){
  this.rout.navigateByUrl("/send-otp-on");
}
}
