import { useEffect, useState } from "react";
import "./App.css";
import axiosClient from "./api/axiosClient";
import Pagination from "./components/Pagination";
import TodoList, { TodoItemProps } from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import ReduxExample from "./components/ReduxExample";
import { useDispatch, useSelector } from "react-redux";
import { addDataTodoReducer } from "./store/todo/todo-action";
import { TODO_ACTION_ADD_DATA } from "./store/todo/todo-type";

function App() {
  const { page, value } = useSelector((state: any) => {
    return state.todoState;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    // Xử lý gọi API trong này;
    const url = value ? `/todos?title=${value}` : `/todos?_page=${page}`;
    const fetchTodos = async () => {
      try {
        const response: any[] = await axiosClient.get(url);
        const action = {
          type: TODO_ACTION_ADD_DATA,
          payload: response,
        };
        dispatch(action);
      } catch (error) {
        const action = {
          type: TODO_ACTION_ADD_DATA,
          payload: [],
        };

        dispatch(action);
      }
    };

    fetchTodos();

    return () => {};
  }, [page, value]);

  return (
    <div className="App">
      <ReduxExample />
      <Pagination />
      <TodoSearch />

      <TodoList />
    </div>
  );
}

export default App;
