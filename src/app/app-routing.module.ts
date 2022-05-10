import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('src/app/home/app-home.module').then(m => m.AppHomeModule)
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
