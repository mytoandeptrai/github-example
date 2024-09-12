import { useDispatch } from "react-redux";
import { onCompleteChange } from "../store-toolkit/slices/todo-slice";
import { TodoItemProps } from "./TodoList";

type Props = {
   todoItem: TodoItemProps;
};

const TodoItem = ({ todoItem }: Props) => {
   const dispatch = useDispatch();
   const onClickTodo = () => {
      dispatch(onCompleteChange(todoItem));
   };

   return (
      <div>
         <input
            type="checkbox"
            checked={todoItem.completed}
            onChange={onClickTodo}
         />
         <span className={todoItem.completed ? "completed" : "non-completed"}>
            {todoItem.title}
         </span>
      </div>
   );
};

export default TodoItem;
