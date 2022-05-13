import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-text-icon',
  templateUrl: './section-text-icon.component.html',
  styleUrls: ['./section-text-icon.component.scss']
})
export class SectionTextIconComponent implements OnInit {

  @Input() icon = ""
  @Input() title = ""
  @Input() text = ""

  constructor() {
  }

  ngOnInit(): void {
  }

}
