import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from '../../models/hotel.model';

type TabName = 'Home' | 'About' | 'Classification' | 'Products' | 'Terms' | 'Finance' | 'Notes';

@Component({
  selector: 'app-hotel-home',
  templateUrl: './hotel-home.component.html',
  styleUrls: ['./hotel-home.component.css']
})
export class HotelHomeComponent implements OnInit {

  hotel: Hotel | null = null;
  activeTab: TabName = 'Home';
  tabs: TabName[] = ['Home', 'About', 'Classification', 'Products', 'Terms', 'Finance', 'Notes'];
  loadError = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Data was already fetched by HotelResolver before this component was rendered.
    this.hotel = this.route.snapshot.data.hotel;
    if (!this.hotel) {
      this.loadError = true;
    }
  }

  selectTab(tab: TabName): void {
    this.activeTab = tab;
  }
}
