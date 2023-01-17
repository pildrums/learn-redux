import { legacy_createStore } from "redux";

/*
  * Reducer 함수
  - 유일하게 Store에 있는 Data를 modify하는 함수
  - 오직 하나의 Reducer 함수만 가지게 된다.
  - if-else문 대신에 switch문을 사용하는 것을 권장(수정에 용이하고 알아보기 편함)

  * action 객체
  - reducer와 소통하는 방법으로 리덕스가 함수를 부를 때 쓰는 두번째 매개변수 혹은 인자
  - 액션은 정의되지 앟은 type property가 있으면 안되기 때문에 무조건 type이 있어야 함
  - string을 keep하기 위해서는 따로 string 변수를 만들어주는게 좋다(오타 방지)

  * Store
  - 상태 데이터 저장소

  * getState 함수
  - 상태 초기 값을 불러오는 함수

  * subscribe 함수
  - store 안에 있는 변화를 감지 => 변화를 감지하면 함수 실행

  * dispatch 함수
  - reducer에게 action을 보내기 위한 함수
*/

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const countReducer = (count = 0, action) => {
  switch (action.type) {
    case INCREASE:
      return count + 1;
    case DECREASE:
      return count - 1;
    default:
      return count;
  }
};

const countStore = legacy_createStore(countReducer);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleIncrease = () => {
  countStore.dispatch({ type: INCREASE });
};

const handleDecrease = () => {
  countStore.dispatch({ type: DECREASE });
};

plus.addEventListener("click", handleIncrease);
minus.addEventListener("click", handleDecrease);
