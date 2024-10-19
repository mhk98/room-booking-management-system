import { getRoomById } from '../../../lib/api';
import BookingForm from '../../../components/BookingForm';

export default async function RoomDetailPage({ params }) {
  const room = await getRoomById(params.id);  // Fetch room by ID

  return (
    <div>
      <h1>{room.title}</h1>
      <img src={room.imageUrl} alt={room.title} />
      <p>Rent: ${room.rent}</p>
      <p>Facilities: {room.facilities}</p>
      <BookingForm roomId={room.id} />
    </div>
  );
}
