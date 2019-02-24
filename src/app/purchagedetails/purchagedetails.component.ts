import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import {Http} from "@angular/http"
@Component({
  selector: 'app-purchagedetails',
  templateUrl: './purchagedetails.component.html',
  styleUrls: ['./purchagedetails.component.css']
})
export class PurchagedetailsComponent implements OnInit {

  constructor( public hobj:Http,public aobj:ActivatedRoute) { }
pid;purdata
  ngOnInit() {
    this.aobj.params.subscribe(prmdata=>{
      if(prmdata['userid'])
      {
        var uid=prmdata['userid']
        // alert(uid)
       var udata={"userid":uid}
      // alert(udata)
       this.hobj.post("category/purdet",udata).subscribe(dt=>{
        // alert(dt['_body'])
        this.purdata=JSON.parse(dt['_body'])
        //console.log(this.purdata)
       // alert(this.purdata[0].products[0].pname)
       })
      }
    })
  }

}
