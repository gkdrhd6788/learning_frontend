import React from 'react';
import './Sidebar.css'; // 이 파일에서 사이드바 스타일을 정의합니다.

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">메뉴 1</div>
      <div className="sidebar-item">메뉴 2</div>
      <div className="sidebar-item">메뉴 3</div>
    </div>
  );
};

export default Sidebar;