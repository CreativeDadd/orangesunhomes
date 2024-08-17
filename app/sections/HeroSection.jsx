export default function HeroSection() {
    return (
      <section className="relative bg-cover bg-center h-screen animated-content" style={{ backgroundImage: 'url(assets/images/hero.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-6 py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover Your Dream Home with Orange-Sun Homes
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Your gateway to luxurious living, offering premium relocation, vacation, and getaway accommodations.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a href="/properties" className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
              Explore Listings
            </a>
            <a href="/contact" className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    );
  }
  