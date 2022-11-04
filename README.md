# learn react query

## 쓰는 이유??

React에서는 서버로부터 비동기로 데이터를 불러오는 작업을 자주 하게되는데

이 작업을 깔끔하고 효율적으로 처리해주는 기능이 hook들 중에 없다

이를 도와주는 것이 React Query이다

그리고 한번 받은 데이터를 저장해줘서(이걸 cacheing이라고 한다 )

두번 중복으로 받게하지 않는다

이 기술은 데이터 이동을 아주 smooth하게 만들어 주며

웹사이트의 성능을 올려주는 역할을 한다

[https://www.youtube.com/watch?v=NQULKpW6hK4](https://www.youtube.com/watch?v=NQULKpW6hK4)

의 34:21 부분을 보면 확인할 수 있다

### basic -> pagination_basic -> pagination_final 폴더 순으로 공부하면 됨

## 중요

### 상황 1

keepPreviousData: page 값이 바뀌면서 key가 달라지면
새로운 데이터를 서버에서 가지고 오는 그 짧은 찰나에 전에 가져왔던 데이터들은 버려진다
데이터가 버려져서 렌더되는 시점에 화면에는 아무것도 보여줄게 없기 때문에 하얀화면이 떠버리게 된다
그러면서 blinking이 생겨버리게 된다

### 상황 1 해결법 keeyPreviousData

keeyPreviousData옵션을 true로 설정하면
그 다음 데이터를 불러올 동안 기존에 있던 데이터들을 바로 버리지않고
화면에 머물게 해준다
그렇게 되면 blinking이 더이상 생기지 않게 된다

### 상황 2

keepPreviousData를 사용하면 유저가 다음 데이터를 다시 불러오는 요청을 할 경우,
데이터 다운받는 속도가 느려서 이전 데이터가 웹상에 계속 노출 되어 있을 수가 있다
그럴때 유저가 함부러 다른 기능들을 다루지 못하게 할 수 있다

상황2 해결법: isPreviousData

isPreviousData를 이용하면 아직 data가 previous 상태일때 true를 반환하게 된다
아래의 next button 처럼 응용하여 사용할 수 있다
