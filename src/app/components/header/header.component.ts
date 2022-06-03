import {Component, OnInit} from '@angular/core';
import {HeaderOption} from "../../model/HeaderOption";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerOptions = [
    new HeaderOption('Accueil', '/home', false),
    new HeaderOption('Qui sommes nous', '/qui', false),
    new HeaderOption('Nos missions', '/missions', false),
    new HeaderOption('Nos formations', '/formations', false),
    new HeaderOption('Nos références', '/references', false),
    new HeaderOption('Certifications - qualifications', '/certifications', false),
    new HeaderOption('Planning', '/planning', false),
    new HeaderOption('Contact', '/contact', false),
  ]

  constructor() {
    const optionSelected = this.headerOptions.find(o => document.URL.endsWith(o.path));
    if (optionSelected) {
      this.selectOption(optionSelected.path);
    } else {
      this.selectOption('/home');
    }
  }

  ngOnInit(): void {
  }

  selectOption = (headerOption: string) => {
    const index = this.headerOptions.findIndex(elt => elt.path === headerOption);
    if (index > -1) {
      this.headerOptions.map(elt => elt.selected = false);
      this.headerOptions[index].selected = true;
    }
  }

}
