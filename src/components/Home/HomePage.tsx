// HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.module.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="box">
        <h2>Marvel</h2>
        <Link to="/marvel">
          <button>Open Marvel Page</button>
        </Link>
      </div>
      <div className="box">
        <h2>DC</h2>
        <Link to="/dc">
          <button>Open DC Page</button>
        </Link>
      </div>
      <div className="box">
        <h2>Anime</h2>
        <Link to="/anime">
          <button>Open Anime Page</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
