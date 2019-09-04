import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  addressForm:FormGroup;
  submited:boolean=false;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
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
  get f(){
     return this.addressForm.controls
  }
  submitAdress(){
    this.submited=true
    if (this.addressForm.invalid) {
      return;
  }
    console.log(this.addressForm.controls)
  }
}
