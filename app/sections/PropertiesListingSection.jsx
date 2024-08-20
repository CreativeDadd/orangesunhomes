// export default function PropertiesListingSection() {
//     return (
//       <section id="properties" className="py-20 bg-white">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl font-semibold text-gray-800">Our Properties</h2>
//           <p className="mt-4 text-gray-600">
//             Explore our selection of beautiful homes for rent and getaways.
//           </p>
//           {/* You can add a grid of property cards here */}
//         </div>
//       </section>
//     );
//   }
  


// const properties = [
//   // Sample properties (you can replace these with dynamic data)
//   {
//     id: 1,
//     image: '/assets/images/property1.jpg',
//     location: 'Beverly Hills, CA',
//     originalPrice: '$3,000,000',
//     discount: 35,
//     discountedPrice: '$1,950,000',
//     description: 'Luxurious villa with modern amenities and breathtaking views.',
//   },
//   {
//     id: 2,
//     image: '/assets/images/property2.jpg',
//     location: 'Adewale Cresent, Lekki, Lagos',
//     originalPrice: '$3,000,000',
//     discount: 35,
//     discountedPrice: '$1,950,000',
//     description: 'Luxurious villa with modern amenities and breathtaking views.',
//   },
//   {
//     id: 3,
//     image: '/assets/images/property3.jpg',
//     location: 'Beverly Hills, CA',
//     originalPrice: '$3,000,000',
//     discount: 35,
//     discountedPrice: '$1,950,000',
//     description: 'Luxurious villa with modern amenities and breathtaking views.',
//   },
//   {
//     id: 4,
//     image: '/assets/images/property4.jpg',
//     location: 'Beverly Hills, CA',
//     originalPrice: '$3,000,000',
//     discount: 35,
//     discountedPrice: '$1,950,000',
//     description: 'Luxurious villa with modern amenities and breathtaking views.',
//   },
//   {
//     id: 5,
//     image: '/assets/images/property5.jpg',
//     location: 'Beverly Hills, CA',
//     originalPrice: '$3,000,000',
//     discount: 35,
//     discountedPrice: '$1,950,000',
//     description: 'Luxurious villa with modern amenities and breathtaking views.',
//   },
//   {
//     id: 6,
//     image: '/assets/images/property6.jpg',
//     location: 'Beverly Hills, CA',
//     originalPrice: '$3,000,000',
//     discount: 35,
//     discountedPrice: '$1,950,000',
//     description: 'Luxurious villa with modern amenities and breathtaking views.',
//   },
//   // Add more property objects here...
// ];

// export default function PropertiesListingSection() {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto px-6">
//         {/* Search Bar */}
//         <div className="mb-8 flex justify-between items-center">
//           <h2 className="text-3xl font-bold text-orange-600">Available Properties</h2>
//           <input
//             type="text"
//             placeholder="Search properties..."
//             className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
//           />
//         </div>

//         {/* Property Cards Grid */}
//         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {properties.map(property => (
//             <div key={property.id} className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
//               <img src={property.image} alt={property.location} className="w-full h-48 object-cover"/>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold">{property.location}</h3>
//                 <p className="text-gray-600 line-through">{property.originalPrice}</p>
//                 <p className="text-orange-600 font-bold">{property.discountedPrice}</p>
//                 <p className="text-sm mt-2 text-gray-700">{property.description}</p>
//                 <div className="mt-4 flex justify-between items-center">
//                   <a href="#" className="text-orange-600 hover:text-orange-700 font-semibold">View Detail</a>
//                   <button className="px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-300">
//                     Deal
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="mt-12 text-center">
//           <a href="#" className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-300">
//             View All Properties
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client'

// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { useState } from 'react';

// export default function PropertiesListingSection() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const properties = [
//     // Array of property objects
//     {
//       id: 1,
//       title: 'Luxurious Beachfront Villa',
//       location: 'Miami, FL',
//       price: '$2,500,000',
//       discountedPrice: '$1,625,000',
//       imageUrl: '/images/property1.jpg',
//       description: 'A stunning villa with a private beach...',
//     },
//     {
//       id: 2,
//       title: 'Modern Urban Apartment',
//       location: 'New York, NY',
//       price: '$1,200,000',
//       discountedPrice: '$780,000',
//       imageUrl: '/images/property2.jpg',
//       description: 'A chic apartment in the heart of the city...',
//     },
//     // Add 10 more properties here
//   ];

//   const filteredProperties = properties.filter(property =>
//     property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     property.location.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <section className="py-12 px-6">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8">Our Listings</h2>
        
//         {/* Search Bar */}
//         <div className="mb-8 text-center">
//           <input 
//             type="text" 
//             placeholder="Search properties..."
//             className="w-full max-w-md px-4 py-2 border rounded-lg"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         {/* Property Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProperties.map(property => (
//             <motion.div 
//               key={property.id}
//               className="bg-white shadow-md rounded-lg overflow-hidden"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-lg font-bold">{property.title}</h3>
//                 <p className="text-gray-500">{property.location}</p>
//                 <p className="text-red-500 line-through">{property.price}</p>
//                 <p className="text-green-500">{property.discountedPrice}</p>
//                 <p className="text-sm mt-2">{property.description}</p>
//                 <div className="mt-4 flex justify-between items-center">
//                   <Link href={`/properties/${property.id}`} legacyBehavior>
//                     <a className="text-blue-500 hover:underline">View Details</a>
//                   </Link>
//                   <Link href={`/deal/${property.id}`} legacyBehavior>
//                     <a className="text-orange-500 hover:underline">Deal</a>
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <div className="mt-12 text-center">
//           <Link href="/properties">
//             <a className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
//               View All
//             </a>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PropertiesListingSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const properties = [
    {
      id: 1,
      title: 'Luxurious Beachfront Villa',
      location: 'Miami, FL',
      price: '$4,500,000',
      discountedPrice: '$1,625,000',
      imageUrl: '/assets/images/property1.jpg',
      description: 'A stunning villa with a private beach...',
    },
    {
      id: 2,
      title: 'Luxurious Beachfront Villa',
      location: 'Adewale Street, Vivet',
      price: '$2,500,000',
      discountedPrice: '$1,625,000',
      imageUrl: '/assets/images/property2.jpg',
      description: ' Luxurious villa with modern amenities and breathtaking views. A stunning villa with a private beach...',
    },
    // Add more properties here
  ];

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Listings</h2>

        <div className="mb-8 text-center">
          <input 
            type="text" 
            placeholder="Search properties..."
            className="w-full max-w-md px-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProperties.map(property => (
            <motion.div 
              key={property.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              // transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{property.title}</h3>
                <p className="text-gray-500">{property.location}</p>
                <p className="text-red-500 line-through">{property.price}</p>
                <p className="text-green-500">{property.discountedPrice}</p>
                <p className="text-sm mt-2">{property.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <Link href={`/properties/${property.id}`} className="text-orange-600 hover:text-orange-700 font-semibold">
                    View Details
                  </Link>
                  <Link href={`/deal/${property.id}`}  className="px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-300">
                    Deal
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/properties/1" className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
