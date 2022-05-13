import {NgModule} from '@angular/core';
import {PlanningComponent} from './container/planning/planning.component';
import {PlanningRoutingModule} from "./planning-routing.module";
import {PlanningContainerComponent} from './container/planning-container/planning-container.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import {CalendarComponent} from './components/calendar/calendar.component';
import {ConnectedModule} from "../connected.module";

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    PlanningComponent,
    PlanningContainerComponent,
    CalendarComponent,
  ],
  imports: [
    PlanningRoutingModule,
    FullCalendarModule,
    ConnectedModule,
  ]
})
export class PlanningModule {
}
