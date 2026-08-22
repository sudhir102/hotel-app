export interface HotelAddress {
  street: string;
  state: string;
  country: string;
  pincode: string;
}

export interface HotelLocation {
  city: string;
  latitude: number;
  longitude: number;
}

export interface HotelWidgets {
  lastUsed: string;
  upcomingConfirmed: number;
  upcomingRequest: number;
  nextBookingDate: string;
  openComplaints: number;
  totalComplaints: number;
  toBePaid: string;
}

export interface BookingMonth {
  month: string;
  count: number;
}

export interface HotelFinance {
  creditLimit: string;
  paymentTerms: string;
  taxId: string;
}

export interface HotelNote {
  author: string;
  date: string;
  text: string;
}

export interface Hotel {
  id: number;
  name: string;
  shortName: string;
  provider: string;
  hotelType: string;
  defaultCurrency: string;
  active: boolean;
  imageUrl: string;
  address: HotelAddress;
  email: string;
  phone: string;
  location: HotelLocation;
  widgets: HotelWidgets;
  bookingsOverview: BookingMonth[];
  about: string;
  classification: string;
  products: string[];
  terms: string;
  finance: HotelFinance;
  notes: HotelNote[];
}
