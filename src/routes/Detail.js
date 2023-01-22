import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { actionCreators } from "../store";

function Detail({ todos, onBtnClick }) {
  const id = useParams().id;
  const todo = todos.find((todo) => todo.id === parseInt(id));
  const navigate = useNavigate();
  const onDelete = () => {
    onBtnClick(id);
    navigate("/");
  };
  return (
    <>
      <h1>{todo?.text}</h1>
      <h2>Created at: {todo?.id}</h2>
      <button onClick={onDelete}>DEL</button>
    </>
  );
}

function mapStateToProps(state) {
  return { todos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    onBtnClick: (id) => dispatch(actionCreators.deleteTodo(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
