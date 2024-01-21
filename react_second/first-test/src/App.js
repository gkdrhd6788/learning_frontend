import React from 'react';
import { createGlobalStyle } from 'styled-components';
import WorkTemplate from './components/WorkTemplate';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import CardContainer from './components/CardContainer';


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  const cardsData = [
    { title: '제목 1' },
    { title: '제목 2' },
    { title: '제목 3' },
    { title: '제목 4' },
    { title: '제목 5' },
    { title: '제목 6' },
    { title: '제목 7' },
    // 더 많은 카드 데이터...
  ];

  const handleSearch = (searchTerm) => {
    console.log('검색:', searchTerm);
    // 여기에 검색 로직을 구현합니다.
    // 예를 들어, API를 호출하거나, 로컬 데이터를 필터링합니다.
  };

  const handleCreate = () => {
    console.log('새로운 카드를 생성합니다.');
    // 카드 생성 로직을 여기에 추가합니다.
  };


  return (
    <>
      <GlobalStyle />
      <div className="app">
        <Sidebar />
        <SearchBar onSearch={handleSearch} />
        <div className="main-content">
          <WorkTemplate>
          <CardContainer cards={cardsData} onCreate={handleCreate}/>
          </WorkTemplate>
        </div>
      </div>
    </>
  );
}

export default App;