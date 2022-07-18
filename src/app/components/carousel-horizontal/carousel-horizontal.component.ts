import {Component, OnInit} from '@angular/core';
import {BrowserUtils} from "../../utils/BrowserUtils";

@Component({
  selector: 'app-carousel-horizontal',
  templateUrl: './carousel-horizontal.component.html',
  styleUrls: ['./carousel-horizontal.component.scss']
})
export class CarouselHorizontalComponent implements OnInit {
  userAgentMobile: boolean = false;

  data = [
    {
      "previewImageSrc": "assets/images/home.png",
      "previewImageSrcMobile": "assets/images/home.png",
      "thumbnailImageSrc": "assets/images/home.png",
      "alt": "Description for Image 1",
      "title": "Title 1"
    },
    {
      "previewImageSrc": "assets/images/home.png",
      "previewImageSrcMobile": "assets/images/home.png",
      "thumbnailImageSrc": "assets/images/home.png",
      "alt": "Description for Image 2",
      "title": "Title 2"
    },
    {
      "previewImageSrc": "assets/images/home.png",
      "previewImageSrcMobile": "assets/images/home.png",
      "thumbnailImageSrc": "assets/images/home.png",
      "alt": "Description for Image 3",
      "title": "Title 3"
    }
  ]


  constructor() {
    this.userAgentMobile = BrowserUtils.isMobileDevice();
  }

  ngOnInit(): void {
  }

}
