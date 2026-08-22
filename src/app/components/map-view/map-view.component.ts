import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnChanges {

  @Input() latitude!: number;
  @Input() longitude!: number;
  @Input() label = '';

  mapUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    if (this.latitude != null && this.longitude != null) {
      const delta = 0.01;
      const bbox = `${this.longitude - delta}%2C${this.latitude - delta}%2C${this.longitude + delta}%2C${this.latitude + delta}`;
      const rawUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${this.latitude}%2C${this.longitude}`;
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
    }
  }
}
