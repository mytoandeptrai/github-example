import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList, { TodoItemProps } from "./components/TodoList";
import Pagination from "./components/Pagination";
import TodoSearch from "./components/TodoSearch";
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

      const url = value
         ? `https://jsonplaceholder.typicode.com/todos?title=${value}`
         : `https://jsonplaceholder.typicode.com/todos?_page=${page}`;

      const fetchTodos = async () => {
         try {
            const response = await fetch(url);

            if (response.ok === false) {
               throw new Error("HTTP error!");
            }

            const data = await response.json();
            setTodoList(data);
         } catch (error) {
            console.error("L��i khi lấy dữ liệu: ", error);
            setTodoList([]);
         }
      };

      fetchTodos();

      return () => {};
   }, [page, value]);

   return (
      <div className="App">
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
