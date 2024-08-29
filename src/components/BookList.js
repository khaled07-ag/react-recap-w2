import React, { useState } from "react";
import Modal from "./Modal";
import books from "../booksData";
import BookItem from "./BookItem";

const BookList = () => {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const bookList = books
    .filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))
    .map((book) => <BookItem book={book} key={book.id} />);
  return (
    <>
      <div className="bg-[#e6ccb2] flex flex-col justify-center items-center ">
        <div className="w-[76vw] flex h-[30px] mb-[30px] mt-[30px]">
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search"
            className="w-[70%] p-2 flex justify-start items-center border border-black rounded-md"
          />
          <button
            className="ml-auto w-[25%] px-3 py-2 rounded-md text-sm md:text-xl border border-black  flex justify-center items-center bg-[#ffcb69] hover:bg-[#c3cfa0]"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add a Book
          </button>
        </div>
        <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
          {bookList}
        </div>
      </div>
      <Modal show={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default BookList;
