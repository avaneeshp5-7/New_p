import { Component, OnInit } from '@angular/core';
import { Slider } from 'ngx-slider';
import $ from "jquery"

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.css']
})
export class ImageSlideComponent implements OnInit {
  
  public slider = new Slider();
  constructor() {
    this.slider.config.loop = true;
    this.slider.config.showPreview = false;
   }

  ngOnInit(){
 
  //   $(document).ready(function(){
  //     $("#div1").cycle({fx:"shuffle"})
  // });

  //   const slideItems = [
  //     { src: '/assets/baner/susm.jpg'  },
  //     { src: '/assets/baner/banner4.jpg'  },
  //     { src: '/assets/sl4.jpg' },
  //     { src: '/assets/baner/susm.jpg' },
  //     { src: '/assets/sl4.jpg' }
  //   ];
 
  //   this.slider.items = slideItems;
  // }
  }
}
