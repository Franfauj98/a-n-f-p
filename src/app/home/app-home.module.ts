import {NgModule} from '@angular/core';
import {HomeContainerComponent} from "./container/home-container/home-container.component";
import {AppHomeRoutingModule} from "./app-home-routing.module";
import {AppHomeComponent} from "./container/app-home/app-home.component";
import {ConnectedModule} from "../connected.module";
import {SectionHomeComponent} from './components/section-home/section-home.component';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DividerModule} from "primeng/divider";
import {SectionQuickInfosComponent} from "./components/section-quick-infos/section-quick-infos.component";

@NgModule({
  declarations: [
    AppHomeComponent,
    HomeContainerComponent,
    SectionHomeComponent,
    SectionQuickInfosComponent,
  ],
  imports: [
    AppHomeRoutingModule,
    ConnectedModule,
    ButtonModule,
    RippleModule,
    DividerModule
  ],
  bootstrap: [AppHomeComponent]
})
export class AppHomeModule {
}
