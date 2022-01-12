import Book from "./Book";

const Shelf = ({ shelf, books, handleSelect, handleClick }) => {
  return (
    <div className="list-books-content">
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) =>
              book.shelf === shelf.shelf ? (
                <Book
                  key={book.id}
                  book={book}
                  books={books}
                  handleSelect={handleSelect}
                  handleClick={handleClick}
                />
              ) : (
                ""
              )
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Shelf;
