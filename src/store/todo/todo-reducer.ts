import { TodoItemProps } from "../../components/TodoList";
import {
  TODO_ACTION_ADD_DATA,
  TODO_ACTION_ADD_PAGE,
  TODO_ACTION_ADD_SEARCH,
  TODO_ACTION_COMPLETE_CHANGE,
} from "./todo-type";

const initialValue = {
  todoList: [],
  page: 1,
  value: "",
};

const todoReducer = (state = initialValue, action: any) => {
  switch (action.type) {
    case TODO_ACTION_ADD_DATA:
      return {
        ...state,
        todoList: action.payload,
      };
    case TODO_ACTION_ADD_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case TODO_ACTION_ADD_SEARCH:
      return {
        ...state,
        value: action.payload,
      };
    case TODO_ACTION_COMPLETE_CHANGE:
      /** Lấy todo từ action.payload ở component todoItem gởi lên. */
      const todo = action.payload;

      /** Clone mảng ban đầu dựa vào state */
      const cloneTodoList: TodoItemProps[] = [...state.todoList];
      /** Tìm vị trí của todo vừa mới được bấm trong mảng */
      // const index = cloneTodoList.indexOf(todo);
      // const existedTodo = cloneTodoList[index];
      // /** Update lại giá trị completed của todo mình vừa tìm thấy */
      // existedTodo.completed = !existedTodo.completed;

      const newTodoList = cloneTodoList.map((existedTodo) => {
        if (existedTodo.id === todo.id) {
          return { ...existedTodo, completed: !existedTodo.completed };
        }

        return existedTodo;
      });

      return {
        ...state,
        todoList: newTodoList,
      };
    default:
      return state;
  }
};

export default todoReducer;
