import React from 'react';
import './CreateCard.css';

const CreateCard = ({ onClick }) => {
  return (
    <div className="create-card" onClick={onClick}>
      <div className="create-icon">+</div>
    </div>
  );
};

export default CreateCard;
