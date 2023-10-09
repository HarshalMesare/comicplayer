// src/components/Popup.tsx
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Popup"
      className="popup-modal"
      overlayClassName="popup-overlay"

    >
      <div className="popup-content">

        <h2><center>Your Popup Content</center></h2>
        <p> <center>This is the content of your popup.</center></p>

        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default Popup;
