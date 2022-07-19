import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';
import {TranslateModule} from '@ngx-translate/core';
import {SectionTextIconComponent} from './components/section-text-icon/section-text-icon.component';
import {CarouselHorizontalComponent} from './components/carousel-horizontal/carousel-horizontal.component';
import {GalleriaModule} from "primeng/galleria";
import {CarouselModule} from "primeng/carousel";
import {SectionTextComponent} from "./components/section-text/section-text.component";
import {TagModule} from "primeng/tag";

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    ServiceWorkerModule,
    RouterModule,
    GalleriaModule,
    CarouselModule,
    TagModule,
  ],
  declarations: [
    SectionTextIconComponent,
    CarouselHorizontalComponent,
    SectionTextComponent
  ],
  providers: [],
  exports: [
    TranslateModule,
    CommonModule,
    ServiceWorkerModule,
    RouterModule,
    SectionTextIconComponent,
    CarouselHorizontalComponent,
    SectionTextComponent
  ]
})
export class ConnectedModule {
}
