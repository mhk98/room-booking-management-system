"use client"
import { useState } from 'react';

const RoomForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [rent, setRent] = useState('');
  const [facilities, setFacilities] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input before submission
    if (!title || !rent || !facilities || !image) {
      alert('All fields are required!');
      return;
    }

    // Create a FormData object for file uploads
    const formData = new FormData();
    formData.append('title', title);
    formData.append('rent', rent);
    formData.append('facilities', facilities);
    formData.append('image', image);

    // Call the onSubmit prop with the form data
    onSubmit(formData);

    // Reset the form fields after submission
    setTitle('');
    setRent('');
    setFacilities('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2"
        required
      />
      <input
        type="number"
        placeholder="Rent"
        value={rent}
        onChange={(e) => setRent(e.target.value)}
        className="border p-2"
        required
      />
      <textarea
        placeholder="Facilities"
        value={facilities}
        onChange={(e) => setFacilities(e.target.value)}
        className="border p-2"
        required
      />
      <input 
        type="file" 
        onChange={(e) => setImage(e.target.files[0])} 
        accept="image/*" // Limit file types to images
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2">Save Room</button>
    </form>
  );
};

export default RoomForm;
