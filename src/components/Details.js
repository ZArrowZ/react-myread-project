import { RemoveScroll } from "react-remove-scroll";
const Details = ({ topScreen, handleClose, bookDetails }) => {
  return (
    <RemoveScroll>
      <div
        className="details-container"
        onDoubleClick={handleClose}
        style={topScreen}
      >
        <div className="details">
          <div className="closeTag" onClick={handleClose}>
            &#x2715;
          </div>
          <img
            className="thumbnail"
            alt="book cover"
            src={bookDetails.imgLink}
          ></img>
          <div className="book-details">
            <h1>{bookDetails.title}</h1>
            <p style={{ color: "gray" }}>{bookDetails.subTitle}</p>
            <p className="bold">Description:</p>
            <p>{bookDetails.description}</p>
            <p className="bold">
              Pages Count: <span>{bookDetails.pagesCount}</span>
            </p>

            <p className="bold">
              Language: <span>{bookDetails.language}</span>
            </p>
            <p className="bold">
              Authors:
              {bookDetails.authors
                ? bookDetails.authors.map((author, index) =>
                    bookDetails.authors.slice(-1)[0] === author ? (
                      <span key={index}> {author}</span>
                    ) : (
                      <span key={index}> {author} & </span>
                    )
                  )
                : ""}
            </p>
            {bookDetails.categories ? (
              <p className="bold">
                Categories:
                <span>{bookDetails.categories}</span>
              </p>
            ) : (
              ""
            )}
            <p className="bold">
              Published Date: <span>{bookDetails.publishedDate}</span>
            </p>
            <p className="info">Double Click to Close the Page</p>
          </div>
        </div>
      </div>
    </RemoveScroll>
  );
};

export default Details;
