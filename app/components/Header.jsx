'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md animated-header fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-2 flex gap-2 justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold text-orange-600 flex items-center text-1xl ">
            <img src="/assets/images/logo.svg" alt="Corporate-logo"  width={50} height={50} />
            <h3>Orange-Sun Homes Limited</h3>
          </a>
          
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" legacyBehavior>
            <a className="text-gray-600 hover:text-orange-600">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-gray-600 hover:text-orange-600">About Us</a>
          </Link>
          <Link href="/properties" legacyBehavior>
            <a className="text-gray-600 hover:text-orange-600">Properties</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="text-gray-600 hover:text-orange-600">Blog</a>
          </Link>
          <Link href="/faq" legacyBehavior>
            <a className="text-gray-600 hover:text-orange-600">FAQ</a>
          </Link>
          <Link href="/getintouch" legacyBehavior>
            <a className="px-4 py-2 bg-orange-600 text-white font-semibold rounded-md shadow-md hover:bg-orange-700 transition duration-300">
              Contact
            </a>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            id="menu-btn"
            className={`menu-btn text-orange-600 focus:outline-none ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path className="line1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16"></path>
              <path className="line2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12h16"></path>
              <path className="line3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="menu" className={`md:hidden ${menuOpen ? '' : 'hidden'} px-12 py-6 flex flex-col items-end space-y-6`}>
        <Link href="/" legacyBehavior>
          <a className="block text-gray-600 hover:text-orange-600">Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="mt-2 block text-gray-600 hover:text-orange-600">About Us</a>
        </Link>
        <Link href="/properties" legacyBehavior>
          <a className="mt-2 block text-gray-600 hover:text-orange-600">Properties</a>
        </Link>
        <Link href="/blog" legacyBehavior>
          <a className="mt-2 block text-gray-600 hover:text-orange-600">Blog</a>
        </Link>
        <Link href="/faq" legacyBehavior>
          <a className="mt-2 block text-gray-600 hover:text-orange-600">FAQ</a>
        </Link>
        <Link href="/getintouch" legacyBehavior>
          <a className="mt-4 block px-4 py-2 bg-orange-600 text-white font-semibold rounded-md shadow-md hover:bg-orange-700 transition duration-300">
            Contact
          </a>
        </Link>
      </div>
    </nav>
  );
}
