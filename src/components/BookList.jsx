import BookShow from "./BookShow";
import useBookcontext from "../hooks/use-hooks-context";

function BookList() {
    const { books } = useBookcontext();

    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />
    });

    return (
        <div className="book-list">
            {renderedBooks}
        </div>
    );
}

export default BookList;