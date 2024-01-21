import React, { useState } from 'react';
import './SearchBar.css'; // 검색창 스타일을 위한 CSS 파일

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault(); // 폼 제출 시 페이지 리로드 방지
    onSearch(searchTerm); // 부모 컴포넌트로 검색어 전달
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        className="search-input"
        placeholder="작품을 검색하세요..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit" className="search-button">
        검색
      </button>
    </form>
  );
};

export default SearchBar;
