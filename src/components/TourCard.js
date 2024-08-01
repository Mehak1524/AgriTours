import React from 'react';
import './TourCard.css';  // Import the CSS file for styling

const TourCard = ({ tour }) => {
  return (
    <div className="tour-card">
      <img src={tour.image} alt={tour.title} className="tour-image" />
      <div className="tour-content">
        <h2 className="tour-title">{tour.title}</h2>
        <p className="tour-description">{tour.description}</p>
        <p className="tour-location"><strong>Location:</strong> {tour.location}</p>
        <p className="tour-contact"><strong>Contact:</strong> {tour.contact}</p>
      </div>
    </div>
  );
};

export default TourCard;
