export type ReservationStatus = "confirmed" | "checked-in" | "checked-out" | "cancelled";

export interface Reservation {
  id: string;
  guestName: string;
  roomNumber: string;
  checkIn: string;
  checkOut: string;
  status: ReservationStatus;
}

export const reservations: Reservation[] = [
  { id: "1", guestName: "Alice Johnson", roomNumber: "101", checkIn: "2026-05-20", checkOut: "2026-05-25", status: "checked-in" },
  { id: "2", guestName: "Bob Smith", roomNumber: "205", checkIn: "2026-05-18", checkOut: "2026-05-22", status: "checked-out" },
  { id: "3", guestName: "Carol Davis", roomNumber: "310", checkIn: "2026-05-22", checkOut: "2026-05-28", status: "confirmed" },
  { id: "4", guestName: "David Wilson", roomNumber: "120", checkIn: "2026-05-21", checkOut: "2026-05-24", status: "confirmed" },
  { id: "5", guestName: "Eve Martinez", roomNumber: "415", checkIn: "2026-05-19", checkOut: "2026-05-23", status: "checked-in" },
  { id: "6", guestName: "Frank Lee", roomNumber: "302", checkIn: "2026-05-24", checkOut: "2026-05-27", status: "confirmed" },
];
