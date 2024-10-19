import { useState } from 'react';

const RoomForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [rent, setRent] = useState('');
  const [facilities, setFacilities] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, rent, facilities, image });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2"
      />
      <input
        type="number"
        placeholder="Rent"
        value={rent}
        onChange={(e) => setRent(e.target.value)}
        className="border p-2"
      />
      <textarea
        placeholder="Facilities"
        value={facilities}
        onChange={(e) => setFacilities(e.target.value)}
        className="border p-2"
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit" className="bg-blue-500 text-white p-2">Save Room</button>
    </form>
  );
};

export default RoomForm;
