import { useState } from 'react';

const BookingForm = ({ roomId, handleBooking }) => {
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await handleBooking(roomId, date);
    if (result.error) setError(result.error);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit">Book Room</button>
    </form>
  );
};

export default BookingForm;
