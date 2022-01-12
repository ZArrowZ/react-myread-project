const SelectShelf = ({ books, book, handleSelect }) => {
  const defaultValue = () => {
    books.map((b) => b.id === book.id && (book.shelf = b.shelf));
    if (book.shelf) {
      return book.shelf;
    } else {
      return "none";
    }
  };
  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={defaultValue()}
        onChange={(e) => handleSelect(book.id, e)}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default SelectShelf;
