import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HelloAdminComponent } from './helloAdmin.component';
import { TabGroupComponent } from './tab/tab-group.component';
import { TabPanelComponent } from './tab/tab-panel.component';
import { Testform1Component } from './testform/testform1.component';
import { Testform2Component } from './testform/testform2.component';
import { TestTabContentDirective } from './testTabContent.directive';
import { RoadComponent } from './road/road.component';
import { UsdOrVndPipe } from './transMoney.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HelloAdminComponent,
    Testform1Component,
    Testform2Component,
    TabGroupComponent,
    TabPanelComponent,
    TestTabContentDirective,
    RoadComponent,
    UsdOrVndPipe,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
