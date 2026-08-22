import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HotelSearchComponent } from './components/hotel-search/hotel-search.component';
import { HotelHomeComponent } from './components/hotel-home/hotel-home.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { BookingChartComponent } from './components/booking-chart/booking-chart.component';
import { MapViewComponent } from './components/map-view/map-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelSearchComponent,
    HotelHomeComponent,
    LeftPanelComponent,
    BookingChartComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
