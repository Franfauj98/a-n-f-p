import {Component, OnInit} from '@angular/core';
import {BrowserUtils} from "../../utils/BrowserUtils";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  userAgentMobile: boolean = false;

  constructor() {
    this.userAgentMobile = BrowserUtils.isMobileDevice();
  }

  ngOnInit(): void {
  }

}
