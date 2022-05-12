import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlanningContainerComponent} from "./container/planning-container/planning-container.component";

const routes: Routes = [
  {path: '', component: PlanningContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningRoutingModule {
}
