import SelectShelf from "./SelectShelf";

const Book = ({ book, handleSelect, books, handleClick }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: "url( " + book?.imageLinks?.thumbnail + ")",
            }}
          />
          <SelectShelf book={book} handleSelect={handleSelect} books={books} />
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors?.map((author, index) => (
          <div className="book-authors" key={index}>
            {author}
          </div>
        ))}
        <a href="/" id="details" onClick={(e) => handleClick(book, e)}>
          more Info &#8594;
        </a>
      </div>
    </li>
  );
};

export default Book;
