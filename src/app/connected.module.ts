import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    ServiceWorkerModule,
    RouterModule,
  ],
  declarations: [],
  providers: [],
  exports: [
    TranslateModule,
    CommonModule,
    ServiceWorkerModule,
    RouterModule
  ]
})
export class ConnectedModule {
}
