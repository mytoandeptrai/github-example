import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList, { TodoItemProps } from "./components/TodoList";
import Pagination from "./components/Pagination";
import TodoSearch from "./components/TodoSearch";
import axios from "axios";
import axiosClient from "./api/axiosClient";

function App() {
   /** Chứa thông tin todo của người dùng sau khi nhập */
   const [todoList, setTodoList] = useState<TodoItemProps[]>([]);
   const [page, setPage] = useState(1);
   const [value, setValue] = useState("");

   const onSubmit = (newValue: string) => {
      const newTodo = {
         id: todoList.length + 1,
         title: newValue,
         completed: false,
      };

      // Tạo bản sao của todoList để thay đổi state thông qua setTodoList,
      // và thêm mới todo vào đó.
      const cloneTodoList = [...todoList];
      cloneTodoList.push(newTodo);
      setTodoList(cloneTodoList);
   };

   const onCompleteChange = (todo: TodoItemProps) => {
      const cloneTodoList = [...todoList];
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

      /** Cập nhật lại mảng todoList */
      setTodoList(newTodoList);
   };

   const onPageChange = (newPage: number) => {
      setPage(newPage);
   };

   const onValueChange = (newValue: string) => {
      setValue(newValue);
   };

   useEffect(() => {
      // Xử lý gọi API trong này;

      const url = value ? `/todos?title=${value}` : `/todos?_page=${page}`;

      const fetchTodos = async () => {
         try {
            // const response = await fetch(url);

            // if (response.ok === false) {
            //    throw new Error("HTTP error!");
            // }

            // const data = await response.json();

            /** Methods: GET, POST, PUT, PATCH, DELETE */
            /**
             * Cách dùng axios trực tiếp: axios. method()
             * Cách dùng axios gián tiếp: axios({
             *    method: '...'
             * })
             */
            const response: any[] = await axiosClient.get(url);
            setTodoList(response);
         } catch (error) {
            console.error("L��i khi lấy dữ liệu: ", error);
            setTodoList([]);
         }
      };

      fetchTodos();

      return () => {};
   }, [page, value]);

   const createTodo = async () => {
      try {
         /** nơi gọi api và chứa dữ liệu thành công */
         const newTodo = {
            userId: 1,
            id: 1,
            title: "Khoa Khoa Khoa",
            completed: false,
         };

         const response = await axiosClient.post("/todos", newTodo);
      } catch (error) {
         /** nơi chứa lỗi của server trả về */
         console.log("🚀 ~ createTodo ~ error:", error);
      }
   };

   const editTodo = async () => {
      try {
         const updatedTodo = {
            userId: 1,
            id: 1,
            title: "klsdjasdlfjlasjdfl;asjldf",
            completed: false,
         };

         const id = updatedTodo.id;

         const response = await axiosClient.patch(`/todos/${id}`, updatedTodo);
      } catch (error) {
         console.log("🚀 ~ editTodo ~ error:", error);
      }
   };

   const deleteTodo = async () => {
      try {
         const id = 1;
         const response = await axiosClient.delete(`/todos/${id}`);
      } catch (error) {
         console.log("🚀 ~ deleteTodo ~ error:", error);
      }
   };

   /**
    * Hàm bất đồng bộ : async và await
    * cách tạo hàm => tạo hàm như bình thường, trước hàm gắn vào chữ async, trong hàm dùng await
    * await này dùng để gọi API.
    * và 2 cái này phriả đi cùng với nhau.
    * lưu ý: trong hàm async thì phải dùng try catch .
    * Các phương thức gọi API:
    *
    * GET: Dùng để gọi lấy dữ liệu sản phẩm + Ko truyền data lên server
    * POST: Dùng để tạo mới sản phẩm + Phải gởi data lên server
    * PUT: Dùng để sửa sản phẩm + Phải gởi data lên phía server
    * PATCH: Dùng để sửa sản phẩm + Phải gởi data lên phía server
    * DELETE: Dùng để xoá sản phẩm + Ko truyền data lên server
    */

   return (
      <div className="App">
         <button
            type="button"
            onClick={createTodo}
         >
            Tạo
         </button>
         <button
            type="button"
            onClick={editTodo}
         >
            Sửa
         </button>
         <button
            type="button"
            onClick={deleteTodo}
         >
            Xoá
         </button>
         <Pagination
            page={page}
            onPageChange={onPageChange}
         />
         <TodoSearch
            value={value}
            onValueChange={onValueChange}
         />
         {/* <TodoForm onSubmit={onSubmit} /> */}

         <TodoList
            todoList={todoList}
            onCompleteChange={onCompleteChange}
         />
      </div>
   );
}

export default App;
