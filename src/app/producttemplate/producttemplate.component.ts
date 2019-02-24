import { Component, OnInit, Inject } from '@angular/core';
import { Http } from "@angular/http";
import { ActivatedRoute, Router } from "@angular/router";
import $ from "jquery";

@Component({
  selector: 'app-producttemplate',
  templateUrl: './producttemplate.component.html',
  styleUrls: ['./producttemplate.component.css']
})
export class ProducttemplateComponent implements OnInit {

  constructor(@Inject(ActivatedRoute) public robj, public probj: Http, public rout: Router) { }
  proname;  procolor; proprice; prodesc; ssid; ssubdata
  ngOnInit() {
    this.robj.params.subscribe(paramresult => {
      this.ssid = (paramresult['_id'])
      var proDetail = { sscatid: this.ssid }
      this.probj.post("category/productss", proDetail).subscribe(procbk=>{
       this.ssubdata=JSON.parse(procbk['_body'])
       console.log(this.ssubdata)

       $("document").ready(function(){
        $(".cartbtn").mouseover(function(){
         $(this).css("background-color"," rgb(25, 80, 63)")
        }); 
        $(".cartbtn").mouseout(function(){
          $(this).css("background-color"," rgb(0, 128, 128)")
      
        });
      });
      

      })
    });
  }
  funDetail(y){
    this.rout.navigateByUrl("/prodetail;proid="+y)
  }
  // funDetails(y){
  //   this.rout.navigateByUrl("/prodetail;proid="+y)
  // }
}
