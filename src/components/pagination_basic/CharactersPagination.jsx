import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Character from '../pagination_final/Character';

const CharactersPagination = ({}) => {
  //  page 동적으로 변화주기

  // 1-(1) page를 useState에 담는다

  const [page, setPage] = useState(2);

  // 1-(3) fetchCharacters에 임의의 param이름으로 kobe라고 넣었다
  // fetchCharacters가 useQuery에서 이용되면서 kobe안의 값이 들어오는데
  // {queryKey: '', pageParam:'' ...} 이런식으로 들어온다
  // console.log(kobe)로 보면 여기서 queryKey값에 ['characters', 2]이렇게 들어오게 된다
  // 이게 우리가 등록해준 key값이다
  // 여기서 두번째 인자를 page로 넣으면 된다

  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  // 1-(2) 각 page마다 각각의 key값이 있어야 한다
  // -> useQuery의 key 값을 배열로 만들고 두번째 인자에 동적으로 변하는 page값을 집어 넣는다

  const { data, status } = useQuery(['characters', page], fetchCharacters);

  //   console.log(data);

  //   1-(4)
  // 이제 pagenation의 기본적인 기능은 구현했다
  // 그런데 next를 누르면 새로운 데이터를 가져올때 화면에 blinking이 생기게 된다
  // 이 이유는 새로운 데이터를 서버에서 가지고 오는 동안에 전에 가져왔던 데이터들은 버려진다
  // 그러면서 blinking이 생겨버리게 된다
  // 이 blinking을 어떻게 하면 해결할 수 있을까?
  // pagination_final폴더에서 이에대한 해법을 제시해놓았다

  return (
    <>
      <div className='characters'>
        {data &&
          data.results.map((character) => {
            return (
              <>
                <Character key={character.id} character={character} />
              </>
            );
          })}
        {data && (
          <div>
            <button
              disabled={page === 1}
              onClick={() => setPage((page) => page - 1)}
            >
              Previous
            </button>

            <button
              disabled={!data.info.next}
              onClick={() => setPage((page) => page + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default CharactersPagination;
