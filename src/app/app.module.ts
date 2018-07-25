import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ChartModule } from 'angular-highcharts';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { AppComponent } from './containers';
import { ChartComponent } from './components';
import { ChartEffects } from './effects';
import { ApiChartService } from './services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      ChartEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [ApiChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
