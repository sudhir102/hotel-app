import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { Hotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private readonly dataUrl = 'assets/mock-data/hotels.json';
  private hotels$: Observable<Hotel[]> | null = null;

  constructor(private http: HttpClient) {}

  /**
   * Loads and caches the full mock hotel list.
   * Uses shareReplay so the JSON file is only fetched once per app session.
   */
  private getAllHotels(): Observable<Hotel[]> {
    if (!this.hotels$) {
      this.hotels$ = this.http.get<Hotel[]>(this.dataUrl).pipe(
        catchError(this.handleError<Hotel[]>('load hotel list', [])),
        shareReplay(1)
      );
    }
    return this.hotels$;
  }

  /**
   * Search hotels by name (case-insensitive, partial match) with pagination.
   */
  searchHotels(query: string, page: number, pageSize: number): Observable<{ results: Hotel[]; total: number }> {
    return this.getAllHotels().pipe(
      map(hotels => {
        const q = (query || '').trim().toLowerCase();
        const filtered = q ? hotels.filter(h => h.name.toLowerCase().includes(q)) : hotels;
        const start = (page - 1) * pageSize;
        const results = filtered.slice(start, start + pageSize);
        return { results, total: filtered.length };
      }),
      catchError(this.handleError<{ results: Hotel[]; total: number }>('search hotels', { results: [], total: 0 }))
    );
  }

  /**
   * Fetch a single hotel by id. Used by the route resolver.
   */
  getHotelById(id: number): Observable<Hotel | undefined> {
    return this.getAllHotels().pipe(
      map(hotels => hotels.find(h => h.id === id)),
      catchError(this.handleError<Hotel | undefined>(`load hotel id=${id}`, undefined))
    );
  }

  private handleError<T>(operation: string, fallbackValue: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`HotelService: ${operation} failed`, error);
      // In a real app this would surface to a toast/notification service.
      return of(fallbackValue);
    };
  }
}
