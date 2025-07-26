import React from "react";
import "../styles/gradientText.css";

const Hero = () => (
  <section className='flex flex-col items-center justify-center py-16 bg-gray-50'>
    <div className='mb-4'>
      <span className='bg-white border border-gray-200 rounded-full px-4 py-1 text-sm text-gray-600 shadow'>
        AI-Powered Growth for E-Commerce Founders
      </span>
    </div>
    <h1 className='text-5xl md:text-6xl font-bold text-center mb-4'>
      From Idea to Sales,{" "}
      <span className='gradient-text'>We Build Your E-Commerce Brand</span> With
      AI Precision
    </h1>
    <p className='text-lg text-gray-600 text-center mb-8 max-w-2xl'>
      Helping Indian E-Commerce Founders Scale Profitably – From Prototype to
      Real Sales Using AI-Driven Marketing Strategies
    </p>
    <div className='flex gap-4 justify-center'>
      <a
        href='#'
        className='bg-gradient-to-br from-purple-400 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:from-purple-500 hover:to-purple-700 transition'>
        Book Your Free Discovery Call
      </a>
      <a
        href='#'
        className='bg-white border border-gray-300 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition'>
        ▶ Watch Demo
      </a>
    </div>
  </section>
);

export default Hero;
