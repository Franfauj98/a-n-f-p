import {Component, OnInit} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/angular";
import frLocale from "@fullcalendar/core/locales/fr"

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: ''
    },
    locale: frLocale,
    initialView: 'dayGridMonth',
    weekends: true,
    themeSystem: 'bootstrap5',
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    events: [
      {title: 'Formation Amiante SS4', start: '2022-06-06', end: '2022-06-10'},
      {title: 'Formation Littérature', start: '2022-06-21', end: '2022-06-25'}
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
