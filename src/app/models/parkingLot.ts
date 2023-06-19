export interface ParkingLot {
  name: string;
  zone: string;
  lat: number;
  lng: number;
  carSlots: number;
  busSlots: number;
  handicapSlots: number;
  pricePerHour: number;
  toggleCarState: boolean,
  toggleBusState: boolean,
  toggleHandicapState: boolean
}
