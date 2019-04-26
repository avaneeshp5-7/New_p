import { Component, OnInit ,Inject} from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import {Http} from '@angular/http'

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  edit_p:boolean=false;
  u_profile:boolean=true;
  last_name;
  constructor(public rout:Router, public aobj:ActivatedRoute,@Inject(Http) public http) {this.funedit_profile() }
  uname;email;upwd;contact;addr;pdata;uidd; updata;uid;uobj;spaddr;
  ngOnInit() {
    this.edit_p=false;
    this.u_profile=true
    this.uidd=localStorage.getItem("userid")
    this.uobj={_id:parseInt(this.uidd)}
   // alert(this.uidd  + "funedit")

 this.http.post("category/getuserdata",this.uobj).subscribe(hh=>{
  console.log(hh._body)
  this.updata=JSON.parse(hh._body)
  //alert(hh)
  this.uname=this.updata[0].fname;
  console.log(this.uname)
  this.last_name=this.updata[0].lname;
  this.email=this.updata[0].email;
  this.contact=this.updata[0].Contact;
  // alert(this.contact)
  this.uid=this.updata[0].userid;
  this.upwd=this.updata[0].password
  //alert(this.upwd)
  this.addr=this.updata[0].address.BillindAdsress[2].biladdress
  this.spaddr=this.updata[0].address.Shipping[2].shipaddress
 })   
  }

  funedit_profile(){  
  }
  fun_update_profile(){
    this.uobj={_id:parseInt(this.uidd)}
  var newobj={fullname:this.uname,email:this.email,Contact:this.contact,userid:this.uid,password:this.upwd,billaddress:this.addr,shipaddress:this.spaddr}
  this.http.post("category/updateProfile",[this.uobj,newobj]).subscribe(dd=>{
  alert(dd._body)
  // this.rout.navigateByUrl("")
  this.edit_p=false;
    this.u_profile=true
  })
  }

  edit_profile(){
    this.edit_p=true;
    this.u_profile=false
  }

}
