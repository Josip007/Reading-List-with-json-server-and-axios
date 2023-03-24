import { useContext } from "react";
import BooksContext from "../context/books";

function useBookcontext () {
    return useContext(BooksContext);
}

export default useBookcontext;