import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http"
import { Router } from "@angular/router"
@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.css']
})
export class UpcommingComponent implements OnInit {

  constructor(public upobj:Http,public rout:Router) {this.upfunProd(); }

  ngOnInit() {
    
  }


  uppdata;
  upfunProd(){
   this.upobj.get("/category/upproducts").subscribe(dt=>{
    this.uppdata=JSON.parse(dt['_body'])
   // console.log(this.prodata)
   })
 }
 funDetails(pdid){
    this.rout.navigateByUrl("prodetail;pid="+pdid)
 }
}
