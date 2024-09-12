import { useDispatch, useSelector } from "react-redux";
import { TODO_ACTION_ADD_PAGE } from "../store/todo/todo-type";
import { createTodo } from "../store/todo/todo-action";

const Pagination = () => {
   const dispatch = useDispatch();
   const page = useSelector((state: any) => {
      return state.todoState.page;
   });

   const onPrevClick = () => {
      if (page === 1) return;
      const newPage = page - 1;

      const action = {
         type: TODO_ACTION_ADD_PAGE,
         payload: newPage,
      };

      dispatch(action);
   };

   const onNextClick = () => {
      const newPage = page + 1;

      const action = {
         type: TODO_ACTION_ADD_PAGE,
         payload: newPage,
      };

      dispatch(action);
   };

   const onAddTodo = () => {
      const payload = { title: "foo", body: "bar", userId: 1 };
      dispatch(createTodo(payload));
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
         <button onClick={onAddTodo}>Thêm</button>
         <button onClick={onNextClick}>Sửa</button>
         <button onClick={onNextClick}>Xoá</button>
      </div>
   );
};

export default Pagination;
