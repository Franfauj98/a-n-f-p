import {NgModule} from '@angular/core';
import {FormationComponent} from './container/formation/formation.component';
import {FormationRoutingModule} from "./formation-routing.module";
import {FormationContainerComponent} from './container/formation-container/formation-container.component';
import {ConnectedModule} from "../connected.module";

@NgModule({
  declarations: [
    FormationComponent,
    FormationContainerComponent,
  ],
  imports: [
    FormationRoutingModule,
    ConnectedModule,
  ]
})
export class FormationModule {
}
