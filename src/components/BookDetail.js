import React from "react";
import books from "../booksData";
const BookDetail = () => {
  const book = books[0];
  return (
    <div className="bg-[#e6ccb2] w-screen h-[100vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={book.image}
            alt={book.title}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3 justify-center gap-10">
          <h1>Title: {book.title}</h1>
          <h1>Price: {book.price}$ </h1>
          <p>Description: {book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
