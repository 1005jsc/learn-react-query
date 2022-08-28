# learn react query

쓰는 이유: 리엑트에서 비동기를 사용을 더 편리하게 해주는 패키지이다

react query의 사용법중 가장 기본되는 useQuery를 쓰는 법에 대해 다뤄보았다

### Characters.jsx

중요 1
keepPreviousData: page 값이 바뀌면서 key가 달라지면 전에 가져왔던 데이터들은 버려진다
데이터를 버리지 않고 cashe에 저장해서 다시 쓸수 있도록 하고 싶으면
keepPreviousData를 true로 설정해준다

중요 2
keepPreviousData를 사용하면 유저가 다음 데이터를 다시 불러오는 요청을 할 경우,
데이터 다운받는 속도가 느려서 이전 데이터가 웹상에 계속 노출 되어 있을 수가 있다
그럴때 유저가 함부러 다른 기능들을 다루지 못하게 할 수 있다
isPreviousData를 이용하면 아직 data가 previous 상태일때 true를 반환하게 된다
아래의 next button 처럼 응용하여 사용할 수 있다
