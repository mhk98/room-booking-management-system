import RoomForm from '../../../components/RoomForm';


export default async function AdminDashboard() {


  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Rooms</h2>
      {/* Use RoomForm for room creation/updation */}
      <RoomForm />
      <ul>
        <li>Rooms 1</li>
        <li>Rooms 1</li>
        <li>Rooms 1</li>
        <li>Rooms 1</li>
        <li>Rooms 1</li>
        <li>Rooms 1</li>
        <li>Rooms 1</li>
      </ul>
      <h2>Bookings</h2>
      <ul>
        <li>Bookings 1</li>
        <li>Bookings 1</li>
        <li>Bookings 1</li>
        <li>Bookings 1</li>
        <li>Bookings 1</li>
        <li>Bookings 1</li>
        <li>Bookings 1</li>
        <li>Bookings 1</li>
      </ul>
    </div>
  );
}
