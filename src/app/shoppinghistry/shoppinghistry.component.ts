import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { Http } from "@angular/http"
@Component({
  selector: 'app-shoppinghistry',
  templateUrl: './shoppinghistry.component.html',
  styleUrls: ['./shoppinghistry.component.css']
})
export class ShoppinghistryComponent implements OnInit {
  constructor( public hobj:Http,public aobj:ActivatedRoute,public r:Router) { }
pid;purdata;parr=[];uid
  ngOnInit() {
    this.aobj.params.subscribe(prmdata=>{
      if(prmdata['userid'])
      {
      this.uid=prmdata['userid']
       var udata={"userid":this.uid}
       this.hobj.post("category/purdet",udata).subscribe(dt=>{
        this.purdata=JSON.parse(dt['_body'])
       })
      }
    })
  }

  removehisrty(rdata){
    var ob={_id:rdata}
    this.hobj.post("category/removehistry",ob).subscribe(dt=>{
     alert(dt['_body']) 
    })
  }
}
