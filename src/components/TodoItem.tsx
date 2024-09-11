import React from "react";
import { TodoItemProps } from "./TodoList";
import { useDispatch } from "react-redux";
import { TODO_ACTION_COMPLETE_CHANGE } from "../store/todo/todo-type";

type Props = {
  todoItem: TodoItemProps;
};

const TodoItem = ({ todoItem }: Props) => {
  const dispatch = useDispatch();
  const onClickTodo = () => {
    dispatch({
      type: TODO_ACTION_COMPLETE_CHANGE,
      payload: todoItem,
    });
    // onCompleteChange(todoItem);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todoItem.completed}
        onChange={onClickTodo}
      />
      <span className={todoItem.completed ? "completed" : "non-completed"}>
        {todoItem.title}
      </span>
    </div>
  );
};

export default TodoItem;
