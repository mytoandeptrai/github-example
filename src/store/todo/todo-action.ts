import { TodoItemProps } from "../../components/TodoList";
import {
  TODO_ACTION_ADD_DATA,
  TODO_ACTION_ADD_PAGE,
  TODO_ACTION_ADD_SEARCH,
} from "./todo-type";

export const addDataTodoReducer = (data: TodoItemProps[]) => {
  return {
    type: TODO_ACTION_ADD_DATA,
    payload: data,
  };
};

export const addPageTodoReducer = (page: number) => {
  return {
    type: TODO_ACTION_ADD_PAGE,
    payload: page,
  };
};

export const addSearchTodoReducer = (search: string) => {
  return {
    type: TODO_ACTION_ADD_SEARCH,
    payload: search,
  };
};
