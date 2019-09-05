import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Http} from '@angular/http'

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  addressForm:FormGroup;
  submited:boolean=false;
  getadr:any;
  getlen:any;
  user:any;
  editinfo:boolean=false;
  edt:boolean=true
  constructor(private fb:FormBuilder,private http:Http) { }
  ngOnInit() {
    this.user=(localStorage.getItem('userid'))
    this.getAdrs();
    this.addressForm=this.fb.group({
      pincode:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(6),Validators.maxLength(6)]],
      city:['',Validators.required],
      state:['',Validators.required],
      street:['',Validators.required],
      houseno:['',Validators.required],
      fullname:['',Validators.required],
      contact:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10),Validators.minLength(10)]]
    })
  }

  EditAdd(inform){
    this.editinfo=!this.editinfo
    this.edt=!this.edt

    this.addressForm=this.fb.group({
      pincode:[inform.pincode,[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(6),Validators.maxLength(6)]],
      city:[inform.city,Validators.required],
      state:[inform.state,Validators.required],
      street:[inform.street,Validators.required],
      houseno:[inform.houseno,Validators.required],
      fullname:[inform.fullname,Validators.required],
      contact:[inform.contact,[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10),Validators.minLength(10)]]
    })
  }
  updateSubmit(){
    console.log(this.addressForm.value)
    alert("hii")
    this.editinfo=!this.editinfo
    this.edt=!this.edt
  }

  getAdrs(){
    this.http.get('/category/ship_adrs').subscribe(dt=>{
      this.getadr=JSON.parse(dt['_body'])
      this.getlen=(this.getadr).length
     })
  }
  get f(){
     return this.addressForm.controls
  }
  submitAdress(){
    this.submited=true
    if (this.addressForm.invalid) {
      return;
  }
  var data=this.addressForm.value
  console.log(data)
  var alldata={pincode:data.pincode,city:data.city,state:data.state,street:data.street,houseno:data.houseno,fullname:data.fullname,contact:data.contact,userides:this.user}
    this.http.post('/category/shipping', alldata).subscribe(dt=>{
      alert("Done")
      this.getAdrs()
    })
  }
}
