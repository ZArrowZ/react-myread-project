import { Link } from "react-router-dom";
import Book from "./Book";

const searchPage = ({
  handleInput,
  searchedBooks,
  handleSelect,
  searchInput,
  books,
  handleClick,
  handleClear,
}) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/" onClick={handleClear}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {Array.isArray(searchedBooks) ? (
            searchedBooks.map((book) => (
              <Book
                key={book.id}
                book={book}
                handleSelect={handleSelect}
                books={books}
                handleClick={handleClick}
              />
            ))
          ) : searchInput.length === 0 ? (
            ""
          ) : (
            <h2>No Result Found</h2>
          )}
        </ol>
      </div>
    </div>
  );
};

export default searchPage;
