import React from "react";

const BookItem = ({ book }) => {
  return (
    <div className="w-[300px] h-[400px]  border border-black rounded-md flex flex-col justify-between items-center p-4">
      <h1 className="text-md font-bold">{book.title}</h1>
      <img
        src={book.image}
        alt={`${book.name}-image`}
        className="w-[200px] rounded-md
      "
      />
      <button className=" border border-black px-5 py-1 rounded-md hover:bg-[#9c6644] hover:text-white">
        View
      </button>
    </div>
  );
};

export default BookItem;
