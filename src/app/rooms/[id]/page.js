"use client"
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const RoomDetails = () => {
  const [selectedRoom, setSelectedRoom] = useState(null); // Track selected room for the modal
  const [startDate, setStartDate] = useState(''); // Track check-in date
  const [endDate, setEndDate] = useState(''); // Track check-out date
  const [isConfirmed, setIsConfirmed] = useState(false); // Track booking confirmation

  // Sample room details for the modal (you can replace this with dynamic data)
  const room = {
    name: 'Economy Room',
    imgSrc: '/images/economy.jpg',
    rent: 'BDT 4,895',
    features: ['Quality living space', 'Comfortable rooms', 'Affordable price', 'Basic breakfast'],
  };

  // Handle booking confirmation
  const handleBooking = () => {
    if (!startDate || !endDate) {
      alert('Please select both check-in and check-out dates.');
      return;
    }
    
    // Validate that the end date is after the start date
    if (new Date(startDate) >= new Date(endDate)) {
      alert('Check-out date must be later than check-in date.');
      return;
    }

    // If dates are valid, confirm the booking
    setIsConfirmed(true);
    setSelectedRoom(null); // Close the modal after confirmation
  };

  return (
    <div>

      <Navbar/>
      <div className="container mx-auto p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Economy</h1>
        </div>

        {/* Main Hotel Image and Grid of Facilities */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Main Image */}
          <div className="col-span-2">
            <Image
              src="/images/economy.jpg"
              alt="Seagull Hotels"
              className="rounded-lg shadow-lg"
              width={900}
              height={600}
              objectFit="cover"
            />
          </div>

          {/* Facility Images */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <Image
              src="/images/standard.jpg"
              alt="Pool"
              className="rounded-lg shadow-lg"
              width={300}
              height={200}
              objectFit="cover"
            />
            <Image
              src="/images/premimum.jpg"
              alt="Jacuzzi"
              className="rounded-lg shadow-lg"
              width={300}
              height={200}
              objectFit="cover"
            />
            <Image
              src="/images/partner.jpg"
              alt="Lobby"
              className="rounded-lg shadow-lg"
              width={300}
              height={200}
              objectFit="cover"
            />
            <Image
              src="/images/economy.jpg"
              alt="Room"
              className="rounded-lg shadow-lg"
              width={300}
              height={200}
              objectFit="cover"
            />
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-2">
          {/* Hotel Details Section */}
          <div>
            <h2 className="text-2xl font-semibold">Seagull Hotels Ltd.</h2>

            <div className="flex items-center mt-2">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span className="ml-2 text-blue-600 text-sm">
                Sea Beach, Soghundha Point, Hotel Motel Zone, Cox's Bazar 4700 ·
              </span>
            </div>

            {/* Price Section */}
            <div className="mt-6">
              <p className="text-gray-500 text-sm line-through">BDT 9,501</p>
              <p className="text-3xl font-semibold text-red-600">BDT 4,895</p>
              <p className="text-green-600 text-sm">Price starts from <span className="font-bold">48% OFF</span></p>
            </div>
          </div>

          {/* Facilities and Book Now Button */}
          <div>
            <h2 className="text-2xl font-semibold">Facilities</h2>
            <ul className="mt-2">
              <li className="flex items-center space-x-2">
                <span className="text-green-500"><FaCheck /></span>
                <span>Quality living space</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500"><FaCheck /></span>
                <span>Comfortable rooms</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500"><FaCheck /></span>
                <span>Affordable price</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500"><FaCheck /></span>
                <span>Basic breakfast</span>
              </li>
            </ul>

            {/* Book Now Button */}
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4"
              onClick={() => setSelectedRoom(room)}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Room Details Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">{selectedRoom.name}</h3>
            <Image
              src={selectedRoom.imgSrc}
              alt={`${selectedRoom.name} image`}
              width={400}
              height={250}
              className="w-full h-auto object-cover mb-4"
            />
            <p className="text-lg font-medium mb-2">Rent: {selectedRoom.rent}</p>
            <p className="mb-4">Facilities:</p>
            <ul className="list-disc ml-6">
              {selectedRoom.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            {/* Booking Form */}
            <div className="mt-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">Check-in Date</label>
              <input
                type="date"
                className="border border-gray-300 p-2 w-full rounded"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />

              <label className="block mb-2 text-sm font-medium text-gray-700 mt-4">Check-out Date</label>
              <input
                type="date"
                className="border border-gray-300 p-2 w-full rounded"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full" onClick={handleBooking}>
                Confirm Booking
              </button>
            </div>
            <div className="mt-4 text-right">
              <button className="text-sm text-blue-500 underline" onClick={() => setSelectedRoom(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Message */}
      {isConfirmed && (
        <div className="fixed inset-0 bg-green-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Booking Confirmed!</h3>
            <p className="text-lg">Your booking for {room.name} has been confirmed from {startDate} to {endDate}.</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg" onClick={() => setIsConfirmed(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
