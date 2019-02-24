import { Component, OnInit,Inject } from '@angular/core';
import {Http} from "@angular/http"
import $ from "jquery";
import {ProductDtailComponent} from "../product-dtail/product-dtail.component"
import { RouterModule,Router} from "@angular/router"
import { ShowCartImageServiceService } from "../show-cart-image-service.service"
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  value

  constructor(@Inject(Http) public nobj, public rout:Router, private servar: ShowCartImageServiceService) { this.funProd();}

  ngOnInit() {
   
    $("document").ready(function(){
          $(".cartbtn").mouseover(function(){
           $(this).css("background-color"," rgb(25, 80, 63)")
          }); 
          $(".cartbtn").mouseout(function(){
            $(this).css("background-color"," rgb(0, 128, 128)")
        
          });
    }); 
  }  
  imgdata;data;prodata
   funProd(){
     this.nobj.get("/category/products").subscribe(dt=>{
      this.prodata=JSON.parse(dt._body)
      //console.log(this.prodata)
     })
   }  
   funDetail(x){
    this.rout.navigateByUrl("/prodetail;proid="+x)
  }



  updata; arr
  tot_cart_items = 0
  funaddcart(pd) {
    var abc = []; var newarr = []
    if (localStorage.getItem("cart_items") != null) {
      abc = JSON.parse(localStorage.getItem('cart_items'));
     // alert(abc)
      pd.selqty = this.value
      var str = '\\"_id\\":' + pd._id + ",";
     // alert(str)
      if ((localStorage.getItem('cart_items').indexOf(str))) {
        for (var loop = 0; loop < abc.length; loop++) {
          var str1 = JSON.parse(abc[loop])
          if (str1._id == pd._id) {
            str1.selqty = pd.selqty
            alert("Product Updated")
          }
          else
            newarr.push(JSON.stringify(str1))
         // alert(newarr.length)
        }
      }
      newarr.push(JSON.stringify(pd));
     // alert(newarr)
      this.servar.changeMessage(newarr.length.toString())
    }
    else {
      pd.selqty = this.value
      newarr.push(JSON.stringify(pd));
      this.servar.changeMessage(newarr.length.toString())
    }
    localStorage.setItem('cart_items', JSON.stringify(newarr));
    console.log(JSON.parse(localStorage.getItem('cart_items')))
  }
  
  
}
