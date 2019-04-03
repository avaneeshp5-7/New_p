import { Component, Inject,OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";
import { Http } from "@angular/http";
import $ from "jquery"
import { allResolved } from 'q';
import {ShowCartImageServiceService} from "./show-cart-image-service.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
msg:string="0";fullname;arr;
  constructor(@Inject(Http) public cobj,public show_cart_icon_service:ShowCartImageServiceService,public rout:Router) {
    this.getCatRec();
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
bcolor="blue"
search_keyup(){
  this.tmpforsearch=true
}
fun_over_style(t){
t.style.backgroundColor="lightblue"
}
fun_out_style(t){
t.style.backgroundColor="lightblue"
}
fun_search_out(){
this.tmpforsearch=false;
}
usid;contact; email
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
psms;rpassword;
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
