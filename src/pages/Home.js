import React from 'react';
import Navbar from '../components/Navbar';
import TourList from '../components/TourList';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="container">
        <h2>Farm Tours</h2>
        <TourList />
      </main>
    </div>
  );
};

export default Home;
