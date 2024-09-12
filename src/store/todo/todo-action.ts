import axiosClient from "../../api/axiosClient";
import { TodoItemProps } from "../../components/TodoList";
import { AppThunkDispatch } from "../store";
import {
   TODO_ACTION_ADD_DATA,
   TODO_ACTION_ADD_PAGE,
   TODO_ACTION_ADD_SEARCH,
   TODO_ACTION_LOADING_CHANGE,
} from "./todo-type";

interface CreateTodoPayload {
   title: string;
   body: string;
   userId: number;
}

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

export const addLoadingTodoReducer = (loading: boolean) => {
   return {
      type: TODO_ACTION_LOADING_CHANGE,
      payload: loading,
   };
};

/** Cách tạo redux thunk:
 * Viết 1 hàm => trả về 1 hàm trong đó
 *
 * const ham1 = () => {
 *  return async (dispatch) => {
 *     try{
 *        Gọi API ở chỗ này và đưa giá trị lên reducer
 *      }catch{
 *        Bắt lỗi API và trả ra reducer
 *      }
 *   }
 * }
 */

export const fetchTodo = (value: string, page: number) => {
   return async (dispatch: any) => {
      const url = value ? `/todos?title=${value}` : `/todos?_page=${page}`;

      dispatch(addLoadingTodoReducer(true));

      try {
         const response: any[] = await axiosClient.get(url);

         const action = {
            type: TODO_ACTION_ADD_DATA,
            payload: response,
         };
         dispatch(action);
         dispatch(addLoadingTodoReducer(false));
      } catch (error) {
         const action = {
            type: TODO_ACTION_ADD_DATA,
            payload: [],
         };
         dispatch(action);
         dispatch(addLoadingTodoReducer(false));
      }
   };
};

export const createTodo = (payload: CreateTodoPayload) => {
   return async (dispatch: any) => {
      const url = "https://jsonplaceholder.typicode.com/posts";

      dispatch(addLoadingTodoReducer(true));

      try {
         const response = await axiosClient.post(url, payload);
         dispatch(addLoadingTodoReducer(false));
      } catch (error) {
         dispatch(addLoadingTodoReducer(false));
      }
   };
};
