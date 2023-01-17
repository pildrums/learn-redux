import { legacy_createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// Reducer 함수 = 유일하게 Store에 있는 Data를 modify하는 함수
// 오직 하나의 Reducer 함수만 가지게 된다.
const countReducer = (count = 0, action) => {
  if (action.type === "PLUS") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = legacy_createStore(countReducer);

countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "MINUS" });
console.log(countStore.getState());
