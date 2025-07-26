import React from "react";

const Header = () => (
  <header className='flex items-center justify-between py-6 px-10 bg-white shadow-sm'>
    <div className='flex items-center gap-2'>
      <div className='w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600' />
      <span className='font-bold text-lg'>ScaleMint</span>
    </div>
    <nav className='hidden md:flex gap-8 text-gray-600 font-medium'>
      <a href='#'>Services</a>
      <a href='#'>Process</a>
      <a href='#'>Case Studies</a>
      <a href='#'>Pricing</a>
    </nav>
    <div className='flex gap-4 items-center'>
      <a href='#' className='text-gray-700 hover:underline'>
        Sign In
      </a>
      <a
        href='#'
        className='bg-gradient-to-br from-purple-400 to-purple-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:from-purple-500 hover:to-purple-700 transition'>
        Book Free Call
      </a>
    </div>
  </header>
);

export default Header;
