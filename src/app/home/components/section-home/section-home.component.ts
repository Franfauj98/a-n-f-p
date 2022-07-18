import {Component, OnInit} from '@angular/core';
import {BrowserUtils} from "../../../utils/BrowserUtils";

@Component({
  selector: 'app-section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.scss']
})
export class SectionHomeComponent implements OnInit {
  userAgentMobile: boolean = false;

  constructor() {
    this.userAgentMobile = BrowserUtils.isMobileDevice();
  }

  ngOnInit(): void {
  }

}
