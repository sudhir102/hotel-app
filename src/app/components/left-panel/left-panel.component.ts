import { Component, Input } from '@angular/core';
import { Hotel } from '../../models/hotel.model';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent {

  @Input() hotel!: Hotel;

  editingAddress = false;
  editingBasicInfo = false;

  toggleAddressEdit(): void {
    this.editingAddress = !this.editingAddress;
  }

  toggleBasicInfoEdit(): void {
    this.editingBasicInfo = !this.editingBasicInfo;
  }

  saveAddress(): void {
    // In a real app this would call HotelService.updateHotel(...) via an API/PUT request.
    this.editingAddress = false;
  }

  saveBasicInfo(): void {
    this.editingBasicInfo = false;
  }
}
