import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-formation',
  templateUrl: './card-formation.component.html',
  styleUrls: ['./card-formation.component.scss']
})
export class CardFormationComponent implements OnInit {

  @Input() imagePath = '';
  @Input() headerText = '';
  @Input() subHeaderText = '';
  @Input() contentText = '';

  ngOnInit(): void {
  }

}
