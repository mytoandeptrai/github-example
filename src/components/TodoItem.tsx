import React from "react";
import { TodoItemProps } from "./TodoList";

type Props = {
   todoItem: TodoItemProps;
   onCompleteChange: (todo: TodoItemProps) => void;
};

const TodoItem = ({ todoItem, onCompleteChange }: Props) => {
   const onClickTodo = () => {
      onCompleteChange(todoItem);
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
