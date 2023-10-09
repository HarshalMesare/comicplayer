// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import Popup from './components/pop-up';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openPopup}>Open Popup</button>
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}

export default App;
