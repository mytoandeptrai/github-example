import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearch } from "../store-toolkit/slices/todo-slice";

type Props = {};

const TodoSearch = () => {
   const dispatch = useDispatch();
   const value = useSelector((state: any) => {
      return state.todoState.value;
   });

   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;

      dispatch(addSearch(newValue));
   };

   return (
      <div>
         <input
            value={value}
            onChange={onChange}
         />
      </div>
   );
};

export default TodoSearch;
