import React from 'react';
import './Card.css'; // 스타일을 위한 CSS 파일 임포트

const Card = ({ title, onClick }) => {
  return (
    <div className="card-wrapper" onClick={onClick}>
      <div className="border-2 w-24 h-24 mb-2"></div>
      <div className="card-title">{title}</div>
    </div>
  );
};

export default Card;
