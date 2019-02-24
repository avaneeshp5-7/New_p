import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moblile',
  templateUrl: './moblile.component.html',
  styleUrls: ['./moblile.component.css']
})
export class MoblileComponent implements OnInit {

  constructor(public http:Http,public rout:Router) { this.funMobile()}

  ngOnInit() {
  }
  mdata;
  funMobile(){
   // alert("hhhhhhhh")
    this.http.get("moblile/getmob").subscribe(this.bcak)
  }
  bcak=(dt)=>{
   this.mdata=JSON.parse(dt._body)
  }
  funDetails(x){
    this.rout.navigateByUrl("/prodetail;proid="+x)
  }
}
