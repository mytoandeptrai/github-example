import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store-toolkit/slices/counter-slice";
import { addPage, fetchTodoToolkit } from "../store-toolkit/slices/todo-slice";

const Pagination = () => {
   const dispatch = useDispatch();
   const page = useSelector((state: any) => {
      return state.todoState.page;
   });
   const count = useSelector((state: any) => {
      return state.counterState.count;
   });

   const onPrevClick = () => {
      if (page === 1) return;
      const newPage = page - 1;

      dispatch(addPage(newPage));
   };

   const onNextClick = () => {
      const newPage = page + 1;

      dispatch(addPage(newPage));
   };

   const onIncrease = () => {
      dispatch(increment(count + 1));
   };

   const onDecrease = () => {
      dispatch(decrement());
   };

   const onGetTodo = () => {
      const payload = {
         page: 1,
         value: "",
      };
      dispatch(fetchTodoToolkit(payload));
   };

   return (
      <div
         style={{
            display: "flex",
            gap: "0 20px",
         }}
      >
         <button onClick={onPrevClick}>Prev</button>
         <button onClick={onNextClick}>Next</button>
         <p>{count}</p>
         <button onClick={onIncrease}>Tăng</button>
         <button onClick={onDecrease}>Giảm</button>
         <button onClick={onGetTodo}>Gọi API</button>
      </div>
   );
};

export default Pagination;
