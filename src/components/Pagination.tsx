import React from "react";

type Props = {
   page: number;
   onPageChange: (page: number) => void;
};

const Pagination = ({ onPageChange, page }: Props) => {
   const onPrevClick = () => {
      if (page === 1) return;
      const newPage = page - 1;
      onPageChange(newPage);
   };

   const onNextClick = () => {
      const newPage = page + 1;
      onPageChange(newPage);
   };

   return (
      <div>
         <button onClick={onPrevClick}>Prev</button>
         <button onClick={onNextClick}>Next</button>
      </div>
   );
};

export default Pagination;
