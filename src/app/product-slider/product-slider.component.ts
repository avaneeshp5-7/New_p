import { Component, OnInit } from '@angular/core';
import $ from "jquery"
import {Http} from "@angular/http"

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent implements OnInit {

  constructor(public nobj:Http) { }

  lf=0;showimg=3;totwid
  fun1=function(){
   var len= $("#innerdiv > div").length
   this.totwid=len*200;
   $("#innerdiv").css("width",this.totwid)
  }
  funnext=function(){
    this.lf=this.lf-200;
    var fin=this.showimg*-200
    alert(fin)
    fin=this.totwid-fin
   // alert(this.totwid)
    fin=-fin
    //alert(this.lf)
    //alert(fin)
    if(this.lf>fin)
    {
      $("#innerdiv").animate({left:this.lf},200)
    }
    else{
      alert("no")
    }
      //$("#innerdiv").css("left",this.lf)
  }
  

  ngOnInit() {
    this.fun1()
    this.funProd()
  }
  prodata;
  funProd(){
    this.nobj.get("/category/products").subscribe(dt=>{
      //alert(dt._body)
     this.prodata=JSON.parse(dt['_body'])
    // console.log(this.prodata)
    })
  }
}
