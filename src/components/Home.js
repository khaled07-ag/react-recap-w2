import React from "react";

const Home = () => {
  return (
    <div className="w-screen h-[100vh] bg-[#e6ccb2] flex flex-col justify-center items-center md:flex-row font-mono">
      <img
        src="
        https://img.freepik.com/free-vector/white-bookshelf-mockup-books-shelf-library_107791-2457.jpg?t=st=1724927877~exp=1724931477~hmac=c51ee20306e1e83bc0a2f6f4385169ff4e334fd7eff7a58a23344f9c02b1bd04&w=2000"
        alt="Pets logo"
        className="w-[40%] ml-2"
      />
      <h1 className="text-center text-[60px] ">
        Welcome to CODED's BookStore!
      </h1>
    </div>
  );
};

export default Home;
