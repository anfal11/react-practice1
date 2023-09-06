import './Book.css'
export default Book;
function Book ({book}) {
    const {name, author} = book;
    return (
        <div className="book">
            <h3>Book name: {name}</h3>
            <h3>Book author: {author}</h3>
        </div>
    )    
}