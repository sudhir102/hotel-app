import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel.model';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css']
})
export class HotelSearchComponent implements OnInit {

  searchTerm = '';
  hotels: Hotel[] = [];
  total = 0;
  page = 1;
  pageSize = 20;
  loading = false;
  errorMessage = '';

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.total / this.pageSize));
  }

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.loadHotels();
  }

  onSearch(): void {
    this.page = 1;
    this.loadHotels();
  }

  onClear(): void {
    this.searchTerm = '';
    this.page = 1;
    this.loadHotels();
  }

  goToPage(p: number): void {
    if (p < 1 || p > this.totalPages) { return; }
    this.page = p;
    this.loadHotels();
  }

  loadHotels(): void {
    this.loading = true;
    this.errorMessage = '';
    this.hotelService.searchHotels(this.searchTerm, this.page, this.pageSize).subscribe({
      next: (res) => {
        this.hotels = res.results;
        this.total = res.total;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Unable to load hotels right now. Please try again.';
        this.loading = false;
      }
    });
  }
}
