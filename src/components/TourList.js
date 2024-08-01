import React from 'react';
import TourCard from './TourCard';
import greenValley from '../assets/greenValley.jpg';
import vineYard from '../assets/vineYard.jpg';
import meadowFarm from '../assets/meadowFarm.jpeg';
import organicFarm from '../assets/organicFarm.jpg';
import countrySide from '../assets/countrySide.jpg';
import ecoFarm from '../assets/ecoFarm.jpg';

const tours = [
  {
    title: 'Green Valley Farm',
    description: 'Experience the lush green fields and organic produce.',
    location: 'California, USA',
    contact: 'info@greenvalley.com',
    image: greenValley
  },
  {
    title: 'Sunny Hills Vineyard',
    description: 'Enjoy a tour of our picturesque vineyard with wine tasting.',
    location: 'Napa Valley, USA',
    contact: 'contact@sunnyhills.com',
    image: vineYard
  },
  {
    title: 'Mountain Meadow Farm',
    description: 'Explore our farm nestled in the mountains with farm-to-table experiences.',
    location: 'Colorado, USA',
    contact: 'hello@mountainmeadow.com',
    image: meadowFarm
  },
  {
    title: 'Organic Oasis',
    description: 'Discover organic farming practices and enjoy fresh produce.',
    location: 'Oregon, USA',
    contact: 'info@organicoasis.com',
    image: organicFarm
  },
  {
    title: 'Countryside Retreat',
    description: 'Relax and unwind in our serene countryside setting.',
    location: 'Texas, USA',
    contact: 'support@countryside.com',
    image: countrySide
  },
  {
    title: 'Eco Farm Experience',
    description: 'Learn about sustainable farming and eco-friendly practices.',
    location: 'Washington, USA',
    contact: 'info@ecofarm.com',
    image: ecoFarm
  }
];

const TourList = () => {
    return (
      <div className="tour-card-container">
        {tours.map((tour, index) => (
          <TourCard key={index} tour={tour} />
        ))}
      </div>
    );
  };
  
  export default TourList;