# Hotel App (Angular 11)

An Angular application implementing the Hotel Search + Hotel Home assignment.

## Features implemented

- **Hotel Search** — search by name, "Search" button, paginated list (default page size 20) over 200 mock hotels.
- **Hotel name hyperlink** — clicking a hotel name routes to `/home/:id` (the Home page).
- **Left Panel** — image, provider, editable Address section (street/state/country/pincode/email/phone), editable Basic Info section (short name, id, hotel type, default currency, location).
- **Right Panel tabs** — Home, About, Classification, Products, Terms, Finance, Notes. Home tab is shown by default.
- **Home tab widgets** — Last Used, Upcoming Confirmed, Upcoming Request, Next Booking Date, Open/Total Complaints, To Be Paid.
- **Bookings Overview** — CSS bar chart of bookings per month (current year).
- **Map** — embedded map showing the hotel's latitude/longitude.
- **Routing** — `/search` and `/home/:id`, with a `HotelResolver` that fetches hotel data *before* the Home component renders.
- **Mock data** — `src/assets/mock-data/hotels.json` (200 generated hotel records) is used as the mock API via Angular's `HttpClient`.
- **TypeScript** throughout, models in `src/app/models/hotel.model.ts`.
- **RxJS Observables** for all async data access (`HotelService`), with `catchError` used for graceful error handling and fallback values, plus an error banner shown in the UI on failure.

## Getting started (in VS Code)

```bash
npm install
npm start
```

Then open `http://localhost:4200`.

<img width="940" height="459" alt="image" src="https://github.com/user-attachments/assets/e1c7ee2c-940f-4f56-acfc-e9ca2dbb59bb" />
<img width="940" height="540" alt="image" src="https://github.com/user-attachments/assets/55b12543-e3a4-44d7-a89e-12cb1d5de491" />
<img width="940" height="439" alt="image" src="https://github.com/user-attachments/assets/4b9ddeb0-0680-47e8-bb39-30cfc1d5900e" />
<img width="940" height="503" alt="image" src="https://github.com/user-attachments/assets/642df1e2-30fe-41da-87a3-0798f187cd8a" />
<img width="940" height="643" alt="image" src="https://github.com/user-attachments/assets/7a6fb1e3-849c-4ea7-8e09-794a09f2d1ad" />

## Project structure

```
src/app/
  models/hotel.model.ts          # TypeScript interfaces
  services/hotel.service.ts      # HTTP + RxJS + error handling
  services/hotel-resolver.service.ts  # Route resolver
  components/hotel-search/       # Search + pagination
  components/hotel-home/         # Tabs + widgets + chart + map
  components/left-panel/         # Editable address/basic info
  components/booking-chart/      # Bar graph
  components/map-view/           # Embedded map by lat/lng
```

## Notes

- Built against Angular 11 (satisfies "any Angular version greater than 2 - 11").
- The map uses an embedded OpenStreetMap iframe (no API key required) driven by the hotel's latitude/longitude — swap in Google Maps JS API if you have a key.
- Edits made in the Left Panel update local component state only; wire `HotelService.updateHotel()` to a real backend to persist changes.
- 
