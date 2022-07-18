import {Component, OnInit} from '@angular/core';
import {BrowserUtils} from "../../../utils/BrowserUtils";

@Component({
  selector: 'app-section-quick-infos',
  templateUrl: './section-quick-infos.component.html',
  styleUrls: ['./section-quick-infos.component.scss']
})
export class SectionQuickInfosComponent implements OnInit {
  userAgentMobile: boolean = false;

  constructor() {
    this.userAgentMobile = BrowserUtils.isMobileDevice();
  }

  ngOnInit(): void {
  }

}
