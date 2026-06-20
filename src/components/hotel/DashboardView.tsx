import { reservations } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TOTAL_ROOMS = 20;

export default function DashboardView() {
  const checkedIn = reservations.filter((r) => r.status === "checked-in").length;
  const occupied = reservations.filter((r) => r.status === "confirmed" || r.status === "checked-in").length;
  const available = TOTAL_ROOMS - occupied;
  const today = new Date().toISOString().slice(0, 10);
  const todayCheckouts = reservations.filter((r) => r.checkOut === today && r.status !== "cancelled").length;

  const stats = [
    { label: "Total rooms", value: TOTAL_ROOMS, desc: "Hotel capacity" },
    { label: "Occupied", value: occupied, desc: `${checkedIn} checked in today` },
    { label: "Available", value: available, desc: "Ready for new guests" },
    { label: "Check-outs today", value: todayCheckouts, desc: "Departing guests" },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <Card key={s.label}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-foreground">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
