import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export type TodoItemProps = {
   id: number;
   title: string;
   completed: boolean;
};

type Props = {};

const TodoList = () => {
   const todoList: TodoItemProps[] = useSelector((state: any) => {
      return state.todoState.todoList;
   });

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
            />
         ))}
      </div>
   );
};

export default TodoList;
