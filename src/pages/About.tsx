import React from 'react';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About AK Attire</h1>
        <div className="prose prose-lg">
          <p className="mb-6">
            Founded in 2024, AK Attire represents the pinnacle of contemporary fashion. 
            Our journey began with a simple yet powerful vision: to create clothing that 
            seamlessly blends sophistication with comfort.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Philosophy</h2>
          <p className="mb-6">
            We believe that great style shouldn't compromise on comfort. Each piece in 
            our collection is thoughtfully designed and crafted using premium materials, 
            ensuring both exceptional quality and comfort.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Sustainability</h2>
          <p className="mb-6">
            Environmental responsibility is at the heart of everything we do. We're 
            committed to sustainable practices, from sourcing eco-friendly materials 
            to implementing ethical manufacturing processes.
          </p>
        </div>
      </div>
    </div>
  );
}