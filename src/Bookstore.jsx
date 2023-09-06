import Book from "./Book";
export default Bookstore;

function Bookstore ({books}) {
    return (
        <>
        <h3>Books: {books.length}</h3>
        {
            books.map(book => <Book book={book}></Book>)
        }
        </>
    )
}