import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ChartModule } from 'angular-highcharts';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { reducers, metaReducers } from './reducers';
import { AppComponent } from './containers';
import { ChartComponent, TableComponent } from './components';
import { ChartEffects } from './effects';
import { ApiChartService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,
    HttpClientModule,
    MatTableModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      ChartEffects
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 50 }) // must go after StoreModule
  ],
  providers: [ApiChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
