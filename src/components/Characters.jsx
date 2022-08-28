import { useState } from 'react';
import { useQuery } from 'react-query';
import Character from './Character';

const Characters = () => {
  const [page, setPage] = useState(42);

  // useQuery(캐싱을 위해 키를 넣는다, )

  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };
  //   중요 1
  //   keepPreviousData: page 값이 바뀌면서 key가 달라지면 전에 가져왔던 데이터들은 버려진다
  //   데이터를 버리지 않고 cashe에 저장해서 다시 쓸수 있도록 하고 싶으면
  //   keepPreviousData를 true로 설정해준다

  //   중요 2
  //   keepPreviousData를 사용하면 유저가 다음 데이터를 다시 불러오는 요청을 할 경우,
  //   데이터 다운받는 속도가 느려서 이전 데이터가 웹상에 계속 노출 되어 있을 수가 있다
  //   그럴때 유저가 함부러 다른 기능들을 다루지 못하게 할 수 있다
  //   isPreviousData를 이용하면 아직 data가 previous 상태일때 true를 반환하게 된다
  //   아래의 next button 처럼 응용하여 사용할 수 있다

  const { data, status, isPreviousData } = useQuery(
    ['characters', page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );
  console.log(data);

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
              disabled={isPreviousData && !data.info.next}
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

export default Characters;
