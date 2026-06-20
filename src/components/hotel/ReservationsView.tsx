import { reservations } from "@/lib/data";
import type { ReservationStatus } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const statusLabel: Record<ReservationStatus, string> = {
  confirmed: "Confirmed",
  "checked-in": "Checked in",
  "checked-out": "Checked out",
  cancelled: "Cancelled",
};

const statusClass: Record<ReservationStatus, string> = {
  confirmed: "text-blue-600",
  "checked-in": "text-green-600",
  "checked-out": "text-muted-foreground",
  cancelled: "text-red-600",
};

export default function ReservationsView() {
  return (
    <div className="rounded-lg border border-border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Guest name</TableHead>
            <TableHead>Room</TableHead>
            <TableHead>Check-in</TableHead>
            <TableHead>Check-out</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations.map((r) => (
            <TableRow key={r.id}>
              <TableCell className="font-medium">{r.guestName}</TableCell>
              <TableCell>{r.roomNumber}</TableCell>
              <TableCell>{r.checkIn}</TableCell>
              <TableCell>{r.checkOut}</TableCell>
              <TableCell className={statusClass[r.status]}>{statusLabel[r.status]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
