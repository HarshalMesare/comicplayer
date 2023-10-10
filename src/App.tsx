import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import MarvelPage from './components/Marvel/MarvelPage';
import DCPage from './components/DC/DCPage';
import AnimePage from './components/Anime/AnimePage';

function App() {
  return (
    <Router>
      <Route>
        <Route path="/" element={<HomePage/>} />
        <Route path="/marvel" element={<MarvelPage/>} />
        <Route path="/dc" element={<DCPage/>} />
        <Route path="/anime" element={<AnimePage/>} />
        </Route>
    </Router>
  );
}

export default App;
