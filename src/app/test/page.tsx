"use client";

import { useEffect, useState } from "react";

type DailyHour = {
  day: string;
  open: string;
  close: string;
};

export default function TestPage() {
  const [hours, setHours] = useState<DailyHour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/hours")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // if structure is [{ hours: [...] }]
          if (data.length > 0 && data[0].hours) {
            setHours(data[0].hours);
          } else {
            setHours(data); // fallback
          }
        }
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📅 Business Hours</h1>
      {loading ? (
        <p>Loading...</p>
      ) : hours.length === 0 ? (
        <p>No hours found.</p>
      ) : (
        <ul className="space-y-1">
          {hours.map((hour, index) => (
            <li key={index} className="border-b pb-1">
              <strong>{hour.day}:</strong> {hour.open} – {hour.close}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
