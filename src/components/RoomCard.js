import Image from 'next/image';
import Link from 'next/link';
import { FaCheck } from "react-icons/fa6";
const RoomCard = () => {
  const hotels = [
    {
      name: 'Economy',
      features: [
        'Quality living space',
        'Comfortable rooms',
        'Affordable price',
        'Basic breakfast', // Changed 'Breakfast' to 'breakfast' for consistency
      ],
      imgSrc: '/images/economy.jpg',
      color: 'text-orange-500',
    },
    {
      name: 'Standard',
      features: [
        'Comfortable rooms',
        'Complimentary breakfast',
        'In-room coffee & tea maker',
        'Unbeatable value', // Changed 'Value' to 'value' for consistency
      ],
      imgSrc: '/images/standard.jpg',

      color: 'text-green-500',
    },
    {
      name: 'Premium',
      features: [
        'In-house restaurant',
        'Lavish breakfast',
        'Spacious rooms',
        'Prime locations',
      ],
      imgSrc: '/images/premimum.jpg',

      color: 'text-[#0072cd]',
    },
    {
      name: 'Partner',
      features: [
        'Online hotel platform',
        'Comprehensive travel solutions',
        'Best destinations',
        'Long-term relationship',
      ],
      imgSrc: '/images/partner.jpg',
      color: 'text-[#055496]',
    },
  ];
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 mb-20">

    {hotels.map((hotel, index) => (
      <div key={index} className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
        <Image
          src={hotel.imgSrc}
          alt={`${hotel.name} image`}
          width={300}
          height={200}
          className="w-full h-auto object-cover" // Ensure images maintain aspect ratio
        />
        <div className="p-4">
          <h3 className={`${hotel.color} text-xl font-semibold`}>{hotel.name}</h3>
          <ul className="mt-2">
            {hotel.features.map((feature, i) => (
              <li key={i} className="flex items-center space-x-2">
                <span className="text-green-500"><FaCheck /></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          {/* Center the button using flexbox */}
          <h2 className='font-bold ms-4 mt-4'>Rent: BDT 4,895</h2>
          <div className="flex justify-center mt-4">
            <button className='btn'><Link  href='/rooms/1'>View Details</Link></button>
          </div>
        </div>
      </div>
    ))}
  </div>
  

  );
};

export default RoomCard;
