import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <BookList />

      <BookDetail />
    </div>
  );
}

export default App;
