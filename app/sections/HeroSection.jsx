// export default function HeroSection() {
//     return (
//       <section className="relative bg-cover bg-center h-screen animated-content" style={{ backgroundImage: 'url(assets/images/hero.jpg)' }}>
//         <div className="absolute inset-0 bg-black opacity-60"></div>
//         <div className="relative container mx-auto px-6 py-20 text-center text-white">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Discover Your Dream Home with Orange-Sun Homes
//           </h1>
//           <p className="mt-4 text-lg md:text-xl">
//             Your gateway to luxurious living, offering premium relocation, vacation, and getaway accommodations.
//           </p>
//           <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
//             <a href="/properties" className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
//               Explore Listings
//             </a>
//             <a href="/contact" className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300">
//               Get in Touch
//             </a>
//           </div>
//         </div>
//       </section>
//     );
//   }
  
// 'use client'

// import { motion } from 'framer-motion';

// export default function HeroSection() {
//   return (
//     <section
//       className="relative bg-cover bg-center h-screen"
//       style={{ backgroundImage: 'url(assets/images/hero.jpg)' }}
//     >
//       <div className="absolute inset-0 bg-black opacity-60"></div>
//       <div className="relative container mx-auto px-6 py-20 text-center text-white flex flex-col justify-center h-full">
//         <motion.h1
//           className="text-3xl md:text-5xl font-bold leading-tight"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: 'easeOut' }}
//         >
//           Discover Your Dream Home with Orange-Sun Homes
//         </motion.h1>
//         <motion.p
//           className="mt-4 text-base md:text-lg"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
//         >
//           Your gateway to luxurious living, offering premium relocation, vacation, and getaway accommodations.
//         </motion.p>
//         <motion.div
//           className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
//         >
//           <motion.a
//             href="/properties"
//             className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Explore Listings
//           </motion.a>
//           <motion.a
//             href="/contact"
//             className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Get in Touch
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




// 'use client'

// import { motion } from 'framer-motion';

// export default function HeroSection() {
//   return (
//     <section className="relative h-screen">
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src="/assets/images/bgvid.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       ></video>
//       <div className="absolute inset-0 bg-black opacity-60"></div>
//       <div className="relative container mx-auto px-6 py-20 text-center text-white flex flex-col justify-center h-full">
//         <motion.h1
//           className="text-3xl md:text-5xl font-bold leading-tight"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: 'easeOut' }}
//         >
//           Discover Your Dream Home with Orange-Sun Homes
//         </motion.h1>
//         <motion.p
//           className="mt-4 text-base md:text-lg"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
//         >
//           Your gateway to luxurious living, offering premium relocation, vacation, and getaway accommodations.
//         </motion.p>
//         <motion.div
//           className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
//         >
//           <motion.a
//             href="/properties"
//             className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Explore Listings
//           </motion.a>
//           <motion.a
//             href="/contact"
//             className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Get in Touch
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




'use client'

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/images/bgvid1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0"></div>
      <div className="relative z-20 container mx-auto px-6 py-20 text-center text-white flex flex-col justify-center h-full">
        <motion.h1
          className="text-3xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Discover Your Dream Home with Orange-Sun Homes
        </motion.h1>
        <motion.p
          className="mt-4 text-base md:text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          Your gateway to luxurious living, offering premium relocation, vacation, and getaway accommodations.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
        >
          <motion.a
            href="/properties"
            className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Listings
          </motion.a>
          <motion.a
            href="/getintouch"
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
