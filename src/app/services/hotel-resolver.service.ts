import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Hotel } from '../models/hotel.model';
import { HotelService } from './hotel.service';

@Injectable({
  providedIn: 'root'
})
export class HotelResolver implements Resolve<Hotel | null> {

  constructor(private hotelService: HotelService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hotel | null> {
    const id = Number(route.paramMap.get('id'));

    if (!id) {
      this.router.navigate(['/search']);
      return of(null);
    }

    return this.hotelService.getHotelById(id).pipe(
      map(hotel => {
        if (!hotel) {
          // Data unavailable -> gracefully redirect instead of rendering a broken page
          this.router.navigate(['/search']);
          return null;
        }
        return hotel;
      }),
      catchError(() => {
        this.router.navigate(['/search']);
        return of(null);
      })
    );
  }
}
