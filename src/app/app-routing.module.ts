import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('src/app/home/app-home.module').then(m => m.AppHomeModule)
}, {
  path: 'home',
  loadChildren: () => import('src/app/home/app-home.module').then(m => m.AppHomeModule)
}, {
  path: 'planning',
  loadChildren: () => import('src/app/planning/planning.module').then(m => m.PlanningModule)
}, {
  path: '**',
  loadChildren: () => import('src/app/home/app-home.module').then(m => m.AppHomeModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
