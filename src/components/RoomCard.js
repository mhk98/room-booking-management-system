import Link from 'next/link';

const RoomCard = ({ room }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img src={room.imageUrl} alt={room.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-2xl font-semibold">{room.title}</h2>
      <p className="text-lg">Rent: ${room.rent}</p>
      <Link href={`/rooms/${room.id}`}>
        <a className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md">View Details</a>
      </Link>
    </div>
  </div>
);

export default RoomCard;
