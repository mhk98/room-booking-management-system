import { getUserBookings } from '../../../lib/api';

export default async function UserDashboard() {
  const bookings = await getUserBookings();

  return (
    <div>
      <h1>Your Bookings</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            Room: {booking.room.title}, Dates: {booking.startDate} to {booking.endDate}
          </li>
        ))}
      </ul>
    </div>
  );
}
