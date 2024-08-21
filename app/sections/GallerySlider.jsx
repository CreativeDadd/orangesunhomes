// 'use client'
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const deals = [
//   {
//     image: '/assets/images/deal1.jpg',
//     title: 'Luxury Villa in the Countryside',
//     price: '$1,200/month',
//     description: 'Enjoy a peaceful retreat in this stunning countryside villa.',
//   },
//   {
//     image: '/assets/images/deal4.jpg',
//     title: 'Modern Apartment in the City',
//     price: '$2,300/month',
//     description: 'A sleek, modern apartment located in the heart of the city.',
//   },
//   {
//     image: '/assets/images/deal3.jpg',
//     title: 'Beachfront Vacation Home',
//     price: '$3,500/week',
//     description: 'Wake up to ocean views in this beautiful beachfront home.',
//   },
// ];

// export default function GallerySlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % deals.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? deals.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <section className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600
// ">
//       <h2 className="text-4xl font-bold text-center text-white mb-8">Hot Deals & Best Prices</h2>
//       <div className="max-w-4xl mx-auto relative overflow-hidden">
//         <div className="slider-container">
//           {deals.map((deal, index) => (
//             <motion.div
//               key={index}
//               className={`slide ${index === currentIndex ? 'block' : 'hidden'}`}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               <img
//                 src={deal.image}
//                 alt={deal.title}
//                 className="w-full h-64 object-cover rounded-lg shadow-lg"
//               />
//               <div className="text-center text-white mt-4">
//                 <h3 className="text-2xl font-semibold">{deal.title}</h3>
//                 <p className="text-lg">{deal.price}</p>
//                 <p className="mt-2">{deal.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//         {/* Slider Controls */}
//         <button
//           onClick={prevSlide}
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-200"
//         >
//           &#10094;
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-200"
//         >
//           &#10095;
//         </button>
//       </div>
//     </section>
//   );
// }




'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const deals = [
  {
    image: '/assets/images/deal1.jpg',
    title: 'Luxury Villa in the Countryside',
    price: '$1,200/month',
    description: 'Enjoy a peaceful retreat in this stunning countryside villa.',
  },
  {
    image: '/assets/images/deal4.jpg',
    title: 'Modern Apartment in the City',
    price: '$2,300/month',
    description: 'A sleek, modern apartment located in the heart of the city.',
  },
  {
    image: '/assets/images/deal3.jpg',
    title: 'Beachfront Vacation Home',
    price: '$3,500/week',
    description: 'Wake up to ocean views in this beautiful beachfront home.',
  },
];

export default function GallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % deals.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % deals.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? deals.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Hot Deals & Best Prices</h2>
      <div className="max-w-4xl mx-auto relative overflow-hidden">
        <div className="slider-container">
          {deals.map((deal, index) => (
            <motion.div
              key={index}
              className={`slide ${index === currentIndex ? 'block' : 'hidden'}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-112 object-cover rounded-lg shadow-lg"
              />
              <div className="text-center text-white mt-4">
                <h3 className="text-2xl font-semibold">{deal.title}</h3>
                <p className="text-lg">{deal.price}</p>
                <p className="mt-2">{deal.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-200"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-200"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}
