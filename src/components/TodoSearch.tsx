import React from "react";

type Props = {
   value: string;
   onValueChange: (newValue: string) => void;
};

const TodoSearch = ({ value, onValueChange }: Props) => {
   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      onValueChange(newValue);
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
