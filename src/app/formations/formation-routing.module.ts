import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormationContainerComponent} from "./container/formation-container/formation-container.component";

const routes: Routes = [
  {path: '', component: FormationContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule {
}
