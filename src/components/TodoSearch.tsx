import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchTodoReducer } from "../store/todo/todo-action";
import { TODO_ACTION_ADD_SEARCH } from "../store/todo/todo-type";

type Props = {};

const TodoSearch = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: any) => {
    return state.todoState.value;
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    const action = {
      type: TODO_ACTION_ADD_SEARCH,
      payload: newValue,
    };

    dispatch(action);
  };

  return (
    <div>
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default TodoSearch;
