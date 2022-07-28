import {NgModule} from '@angular/core';
import {FormationComponent} from './container/formation/formation.component';
import {FormationRoutingModule} from "./formation-routing.module";
import {FormationContainerComponent} from './container/formation-container/formation-container.component';
import {ConnectedModule} from "../connected.module";
import {TagModule} from "primeng/tag";

@NgModule({
  declarations: [
    FormationComponent,
    FormationContainerComponent,
  ],
  imports: [
    FormationRoutingModule,
    ConnectedModule,
    TagModule,
  ]
})
export class FormationModule {
}
