import React from 'react';
import TourList from './components/TourList';
import './App.css'; // Ensure this path is correct

const App = () => {
  return (
    <div>
      <header className="header">
        <h1>Agritours</h1>
        <p>Discover and book tours to beautiful farms and vineyards.</p>
      </header>
      <div></div>
      <main>
        <div className="tour-card-container">
          <TourList />
        </div>
      </main>
    </div>
  );
};

export default App;
