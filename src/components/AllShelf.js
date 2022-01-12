import Shelf from "./Shelf";
const AllShelf = ({ shelf, books, handleSelect, handleClick }) => {
  return (
    <div className="bookshelf">
      {shelf.map((shelf, index) => (
        <Shelf
          key={index}
          books={books}
          shelf={shelf}
          handleSelect={handleSelect}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default AllShelf;
