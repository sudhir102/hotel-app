import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelSearchComponent } from './components/hotel-search/hotel-search.component';
import { HotelHomeComponent } from './components/hotel-home/hotel-home.component';
import { HotelResolver } from './services/hotel-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: HotelSearchComponent },
  {
    path: 'home/:id',
    component: HotelHomeComponent,
    resolve: { hotel: HotelResolver }
  },
  { path: '**', redirectTo: 'search' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
