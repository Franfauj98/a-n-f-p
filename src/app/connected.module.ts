import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';
import {TranslateModule} from '@ngx-translate/core';
import {SectionTextIconComponent} from './components/section-text-icon/section-text-icon.component';
import {CarouselHorizontalComponent} from './components/carousel-horizontal/carousel-horizontal.component';
import {GalleriaModule} from "primeng/galleria";

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    ServiceWorkerModule,
    RouterModule,
    GalleriaModule,
  ],
  declarations: [
    SectionTextIconComponent,
    CarouselHorizontalComponent
  ],
  providers: [],
  exports: [
    TranslateModule,
    CommonModule,
    ServiceWorkerModule,
    RouterModule,
    SectionTextIconComponent
  ]
})
export class ConnectedModule {
}
