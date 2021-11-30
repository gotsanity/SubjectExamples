import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelViewComponent } from './panel-view/panel-view.component';
import { MeasurementListComponent } from './measurement-list/measurement-list.component';
import { ReplayListComponent } from './replay-list/replay-list.component';
import { BehaviorListComponent } from './behavior-list/behavior-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelViewComponent,
    MeasurementListComponent,
    ReplayListComponent,
    BehaviorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
