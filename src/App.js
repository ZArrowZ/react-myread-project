import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AllShelf from "./components/AllShelf";
import Footer from "./components/Footer";
import * as BooksAPI from "./BooksAPI";
import SearchPage from "./components/SearchPage";
import Details from "./components/Details";

const App = () => {
  const [allShelf] = useState([
    { name: "Currently Reading", shelf: "currentlyReading" },
    { name: "Want to Read", shelf: "wantToRead" },
    { name: "Read", shelf: "read" },
  ]);
  const [books, setBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [openDetails, setOpenDetails] = useState(false);
  const [topScreen, setTopScreen] = useState({});
  const [currBookDetails, setCurrBookDetails] = useState({});
  const booksIDs = books.map((b) => b.id);
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(() => books);
    });
  }, []);

  useEffect(() => {
    BooksAPI.search(searchInput).then((books) => {
      if (Array.isArray(books)) {
        let filteredBooks = books.filter((book) => book.imageLinks);
        setSearchedBooks(() => filteredBooks);
      } else {
        setSearchedBooks(() => {});
      }
    });
  }, [searchInput]);

  const handleSelect = (id, e) => {
    const value = e.target.value;
    const index = books.findIndex((book) => book.id === id);
    let updateBooks = [...books];

    if (booksIDs.includes(id)) {
      updateBooks[index].shelf = value;
      setBooks(updateBooks);
      BooksAPI.update(updateBooks[index], value);
    } else {
      BooksAPI.get(id).then((book) => {
        updateBooks.push(book);
        const bookIndex = updateBooks.indexOf(book);
        updateBooks[bookIndex].shelf = value;
        setBooks(updateBooks);
        BooksAPI.update(updateBooks[bookIndex], value);
      });
    }
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const handleClick = (book, e) => {
    e.preventDefault();
    setOpenDetails(true);
    setTopScreen({ top: window.pageYOffset });
    setCurrBookDetails({
      title: book.title,
      subTitle: book?.subtitle,
      imgLink: book.imageLinks.thumbnail,
      description: book?.description,
      pagesCount: book?.pageCount,
      language: book?.language,
      authors: book?.authors,
      categories: book?.categories,
      publishedDate: book?.publishedDate,
    });
  };

  const handleClose = () => {
    setOpenDetails(false);
  };
  return (
    <div className="app">
      <Routes>
        <Route
          path="/search"
          element={
            <SearchPage
              handleInput={handleInput}
              searchedBooks={searchedBooks}
              handleSelect={handleSelect}
              searchInput={searchInput}
              books={books}
              handleClick={handleClick}
              handleClear={() => setSearchInput("")}
            />
          }
        ></Route>

        <Route
          exact
          path="/"
          element={
            <div className="list-books">
              <Header />
              <AllShelf
                shelf={allShelf}
                books={books}
                handleSelect={handleSelect}
                handleClick={handleClick}
              />
              <Footer />
            </div>
          }
        ></Route>
      </Routes>

      {openDetails && (
        <Details
          bookDetails={currBookDetails}
          topScreen={topScreen}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default App;
