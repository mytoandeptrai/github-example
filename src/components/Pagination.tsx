import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPageTodoReducer } from "../store/todo/todo-action";
import { TODO_ACTION_ADD_PAGE } from "../store/todo/todo-type";

type Props = {};

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: any) => {
    return state.todoState.page;
  });

  const onPrevClick = () => {
    if (page === 1) return;
    const newPage = page - 1;

    const action = {
      type: TODO_ACTION_ADD_PAGE,
      payload: newPage,
    };

    dispatch(action);
  };

  const onNextClick = () => {
    const newPage = page + 1;

    const action = {
      type: TODO_ACTION_ADD_PAGE,
      payload: newPage,
    };

    dispatch(action);
  };

  return (
    <div>
      <button onClick={onPrevClick}>Prev</button>
      <button onClick={onNextClick}>Next</button>
    </div>
  );
};

export default Pagination;
