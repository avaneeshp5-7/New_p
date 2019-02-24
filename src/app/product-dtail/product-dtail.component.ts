import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Http } from "@angular/http";
import { AppComponent } from "../app.component"
import { ShowCartImageServiceService } from "../show-cart-image-service.service"
import $ from "jquery"
@Component({
  selector: 'app-product-dtail',
  templateUrl: './product-dtail.component.html',
  styleUrls: ['./product-dtail.component.css']
})
export class ProductDtailComponent implements OnInit {
  ////////Increment quty
  value = 1
  increaseValue(dt) {
    if (this.value == dt)
      alert("Exceed....")
    else {
      this.value++;
    }
  }
  decreaseValue() {
    if (this.value > 1) {
      this.value--;
    }
  }
  rat_arr = []; half = 0
  constructor(public appobj: AppComponent, public aobj: ActivatedRoute, public robj: Http, private servar: ShowCartImageServiceService) {
  }
  prodid; prodata; x = 0; message: string; prid;

  ngOnInit() {
    if (localStorage.getItem("cart_items") != null) {
      this.servar.currentMessage.subscribe(message => this.message = message)

      var arr = localStorage.getItem("cart_items")

      arr = arr.replace(/\\/g, "")
      arr = arr.replace(/"{/g, "{")
      arr = arr.replace(/}"/g, "}")
      arr = JSON.parse(arr)
      this.tot_cart_items = arr.length
      this.servar.changeMessage(this.tot_cart_items.toString())
    }
    /////////////////////////////////////////  
    $("document").ready(function () {
      $("#small").elevateZoom({
        easing: true,
        lensFadeOut: 100,
        lensFadeIn: 2000,
        zoomWindowFadeOut: 2000,
        scrollZoom: true
      })

    });

    $("document").ready(function () {
      $(".cartbtn").mouseover(function () {
        $(this).css("background-color", "rgb(25, 80, 63)")
      });
      $(".cartbtn").mouseout(function () {
        $(this).css("background-color", " rgb(0, 128, 128)")

      });
    });
    this.aobj.params.subscribe(prmdata => {
      if (prmdata['proid']) {
        this.prodid = parseInt(prmdata['proid']);
        var pid = { _id: this.prodid }
        this.robj.post("category/getPro", pid).subscribe(pdata => {
          this.prodata = JSON.parse(pdata['_body'])
          this.urat=this.prodata[0].userrating;
          // for (var i = 1; i <= this.prodata[0].rating; i++) {
          //   this.rat_arr.push(i)
          // }
          // i--
          // this.half = 0
          // if (this.prodata[0].rating > i)
          //   this.half = 1
          // alert(this.urat)
        })
      }
    })

    this.aobj.params.subscribe(prm => {
      if (prm['pid']) {
        this.prid = parseInt(prm['pid'])
        var ppid = { _id: this.prid }
        this.robj.post("category/uproduct", ppid).subscribe(dt => {
          this.updata = JSON.parse(dt['_body'])
        })
      }
    })
  }
  updata; arr;urat="";
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
           // alert("Product Updated")
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
  funRat(rat) {
    alert(rat)
    var oldob = { _id: this.prodata[0]._id }
    var newob = { userrating: rat }
    var ratdata = [oldob, newob]
    this.robj.post("category/ratdata", ratdata).subscribe(dt => {
      alert(dt['_body'])
    })
  }
}
