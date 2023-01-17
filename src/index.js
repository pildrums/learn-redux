import { legacy_createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const initialState = {
  number: 0,
};

// Reducer 함수 = 유일하게 Store에 있는 Data를 modify하는 함수
// 오직 하나의 Reducer 함수만 가지게 된다.
const countReducer = (count = initialState, action) => {
  if (action.type === "INCREASE") {
    return count + 1;
  } else if (action.type === "DECREASE") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = legacy_createStore(countReducer);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleIncrease = () => {
  countStore.dispatch({ type: "INCREASE" });
};

const handleDecrease = () => {
  countStore.dispatch({ type: "DECREASE" });
};

plus.addEventListener("click", handleIncrease);
minus.addEventListener("click", handleDecrease);
