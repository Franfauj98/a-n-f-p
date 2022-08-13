import {NgModule} from '@angular/core';
import {FormationComponent} from './container/formation/formation.component';
import {FormationRoutingModule} from "./formation-routing.module";
import {FormationContainerComponent} from './container/formation-container/formation-container.component';
import {ConnectedModule} from "../connected.module";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import {CardFormationComponent} from "./components/card-formation/card-formation.component";

@NgModule({
  declarations: [
    FormationComponent,
    FormationContainerComponent,
    CardFormationComponent,
  ],
  imports: [
    FormationRoutingModule,
    ConnectedModule,
    TagModule,
    ButtonModule,
    RippleModule,
    CardModule,
  ]
})
export class FormationModule {
}
