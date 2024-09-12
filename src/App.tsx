import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Pagination from "./components/Pagination";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import { fetchTodo } from "./store/todo/todo-action";

function App() {
   const { page, value, loading } = useSelector((state: any) => {
      return state.todoState;
   });

   const dispatch = useDispatch();

   useEffect(() => {
      // Xử lý gọi API trong này;
      dispatch(fetchTodo(value, page));
   }, [dispatch, page, value]);

   return (
      <div>
         {/* <ReduxExample /> */}
         <Pagination />
         <TodoSearch />

         {loading ? <div>Loading....</div> : <TodoList />}
         {/* <StudentPage /> */}
      </div>
   );
}

export default App;
