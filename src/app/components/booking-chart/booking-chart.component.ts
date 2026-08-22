import { Component, Input, OnChanges } from '@angular/core';
import { BookingMonth } from '../../models/hotel.model';

@Component({
  selector: 'app-booking-chart',
  templateUrl: './booking-chart.component.html',
  styleUrls: ['./booking-chart.component.css']
})
export class BookingChartComponent implements OnChanges {

  @Input() data: BookingMonth[] = [];

  maxCount = 1;

  ngOnChanges(): void {
    this.maxCount = this.data.length
      ? Math.max(...this.data.map(d => d.count))
      : 1;
  }

  barHeight(count: number): number {
    // Percentage height relative to the tallest bar, min 4% for visibility
    return Math.max(4, Math.round((count / this.maxCount) * 100));
  }
}
