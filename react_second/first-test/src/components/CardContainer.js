import React, { useState } from 'react';
import Card from './Card';
import CreateCard from './CreateCard';
import Modal from './Modal';
import './CardContainer.css'; // 이 파일에는 컨테이너의 스타일이 정의되어 있습니다.

const CardContainer = ({ cards, onCreate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="card-container">
      <CreateCard onCreate={onCreate} onClick={handleCreateCardClick}/>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <p>작품 생성 내용을 여기에 넣으세요.</p>
          {/* 여기에 작품 생성 폼을 추가할 수 있습니다. */}
        </Modal>
      )}
      {cards.map((card, index) => (
        <React.Fragment key={index}>
        <Card key={index} title={card.title} onClick={() => console.log(`Clicked on ${card.title}`)} />
        {(index + 1) % 6 === 0 && index !== cards.length - 1 && (
            <div className="row-separator"></div>
        )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CardContainer;