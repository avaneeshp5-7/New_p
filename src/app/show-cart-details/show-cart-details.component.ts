import { Component, OnInit } from '@angular/core';
import { ShowCartImageServiceService } from "../show-cart-image-service.service"
import { AppComponent } from "../app.component"
import { Http } from "@angular/http"
import { Router } from "@angular/router"

@Component({
  selector: 'app-show-cart-details',
  templateUrl: './show-cart-details.component.html',
  styleUrls: ['./show-cart-details.component.css']
})
export class ShowCartDetailsComponent implements OnInit {
  constructor(private servar: ShowCartImageServiceService, private app: AppComponent, public http: Http, public robj: Router) { }
  data = []; tot_cart_items; str;TotalAmnt=0
  ngOnInit() {
    var arr
    if (localStorage.getItem("cart_items") != null) {
      arr = localStorage.getItem("cart_items")
      arr = arr.replace(/\\/g, "")
      arr = arr.replace(/"{/g, "{")
      arr = arr.replace(/}"/g, "}")
      arr = JSON.parse(arr)
      this.tot_cart_items = arr.length
      this.servar.changeMessage(this.tot_cart_items.toString())
      this.data = arr
      this.str = "Cart Details"
      var sel = localStorage.getItem("cart_item.selqty")
      this.cartvalue = sel;

      for (var i = 0; i < arr.length; i++) {

        var pprice=arr[i].pprice
        var quantity = arr[i].selqty
        var allpprice = quantity*parseInt(arr[i].pprice)
        this.TotalAmnt+=allpprice
       // alert(this.TotalAmnt)
      }

    }
    else {
      this.str = "Your cart is empty"
    }


  }
  cartvalue
  increaseValue(dt, ind) {
    if (this.data[ind].selqty == dt)
      alert("Exceed....")
    else {
      this.data[ind].selqty++
    }
  }
  decreaseValue(ind) {
    if (this.data[ind].selqty > 1) {
      this.data[ind].selqty--;
    }
  }
  uid;total=0;
  fun_order_now() {
    var arr
    if (localStorage.getItem("login_check") != null) {
      arr = localStorage.getItem("cart_items")
      arr = arr.replace(/\\/g, "")
      arr = arr.replace(/"{/g, "{")
      arr = arr.replace(/}"/g, "}")
      arr = JSON.parse(arr)
      this.uid = localStorage.getItem("userid")
      var oredr_data = [];
      for (var i = 0; i < arr.length; i++) {
        var product: any = {}
        product.pname = arr[i].pname
        product.quantity = arr[i].selqty
        product.pprice=arr[i].pprice
        product.allpprice = product.quantity*parseInt(arr[i].pprice)
        // alert(product.pprice)
        this.total+=product.allpprice
        product.images = arr[i].images
        oredr_data.push(product)
        console.log(oredr_data)
      }
      var dobj: any = { _id: this.uid, date: new Date(), Products: oredr_data ,Total_price:this.total}
      this.http.post("category/addcart_data", dobj).subscribe(dt => {
        alert(dt['_body'])
        if(localStorage.getItem("login_check") != null) {
          localStorage.removeItem("cart_items")
          this.robj.navigateByUrl("/p_details")
        }
      })
    }
    else {
      alert('User must be logged In !!');
      this.app.toLogin();
    }
  }
  remove_cart_item(ind) {
    this.data.splice(ind, 1)
    localStorage.setItem('cart_items', JSON.stringify(this.data));
    alert("Removed From Cart")
    this.servar.changeMessage(this.data.length.toString())
    if (this.data.length == 0) {
      localStorage.removeItem("cart_items")
      this.str = "Your cart is empty"

    }
    this.robj.navigateByUrl("/cartdet")
  }

}
