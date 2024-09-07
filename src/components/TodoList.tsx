import React from "react";
import TodoItem from "./TodoItem";

export type TodoItemProps = {
   id: number;
   title: string;
   completed: boolean;
};

type Props = {
   todoList: TodoItemProps[];
   onCompleteChange: (todo: TodoItemProps) => void;
};

const TodoList = ({ todoList, onCompleteChange }: Props) => {
   /** Cách 1: if else bình thường */
   if (todoList.length === 0) {
      return <div>There is no todo</div>;
   }

   return (
      <div>
         {todoList.map((todo) => (
            <TodoItem
               key={todo.id}
               todoItem={todo}
               onCompleteChange={onCompleteChange}
            />
         ))}
      </div>
   );
};

export default TodoList;
