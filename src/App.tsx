import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Pagination from "./components/Pagination";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import { fetchTodoToolkit } from "./store-toolkit/slices/todo-slice";

function App() {
   const { page, value, loading } = useSelector((state: any) => {
      return state.todoState;
   });

   const dispatch = useDispatch();

   useEffect(() => {
      // Xử lý gọi API trong này;
      const payload = {
         page: page,
         value: value,
      };
      dispatch(fetchTodoToolkit(payload));
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
