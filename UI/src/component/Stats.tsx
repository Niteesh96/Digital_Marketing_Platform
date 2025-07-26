import React from "react";

const stats = [
  { value: "3.5x", label: "Average ROAS" },
  { value: "₹3L+", label: "Sales Enabled" },
  { value: "50+", label: "Brands Scaled" },
  { value: "92%", label: "Client Success Rate" },
];

const Stats = () => (
  <section className='py-12 bg-white'>
    <div className='max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className='text-3xl font-bold'>{stat.value}</div>
          <div className='text-gray-600 mt-2'>{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
