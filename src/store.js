import { combineReducers, legacy_createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const ADD = "ADD";
const DELETE = "DELETE";

const addTodo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const persistConfig = {
  key: "todos",
  storage: storage,
};

const allReducer = combineReducers({
  reducer,
});

const store = legacy_createStore(persistReducer(persistConfig, allReducer));

export const actionCreators = {
  addTodo,
  deleteTodo,
};

export default store;
