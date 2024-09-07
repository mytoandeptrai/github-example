import React, { useState } from "react";

type Props = {
   onSubmit: (newValue: string) => void;
};

const TodoForm = ({ onSubmit }: Props) => {
   const [inputValue, setInputValue] = useState("");

   const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);
   };

   const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(inputValue);
      setInputValue("");
   };

   return (
      <form
         className="form-container"
         onSubmit={onHandleSubmit}
      >
         <input
            value={inputValue}
            onChange={onInputChange}
         />
         <button type="submit">Add</button>
      </form>
   );
};

export default TodoForm;
