import React from 'react';
import { useQuery } from 'react-query';

const CharactersBasic = ({}) => {
  // 1. react-query : 비동기로 불러오는 데이터를 관리하는데 도움을 주는 라이브러리
  // Fetch, cache and update data in your react and react native application all without touching any 'global state'

  // 가장 기본적인 사용법은 아래와 같다

  const fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    return response.json();
  };

  const { data, status } = useQuery('characters', fetchCharacters);

  console.log(data);
  console.log(status);

  if (status === 'loading') {
    return <div>loading...</div>;
  }
  if (status === 'error') {
    return <div>error...</div>;
  }

  return (
    <>
      <div></div>
    </>
  );
};
export default CharactersBasic;
