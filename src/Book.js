import React from 'react'
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';
// import * as BooksAPI from './BooksAPI'

class Book extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
    }

    render() {
        const { book, onShelfChanger } = this.props;
        let authorsString = '';
        const authors = book.authors;
        if (authors !== undefined && authors.length > 0) {
            const authorsLength = book.authors.length;
            for (let index = 0; index < authorsLength; index++) {
                const author = authors[index];
                if (index === authorsLength - 1) {
                    authorsString += `${author}`;
                } else {
                    authorsString += `${author}, `;
                }
            }
        }
        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                        <ShelfChanger books={this.props.books} book={book} onShelfChanger={onShelfChanger}></ShelfChanger>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{authorsString}</div>
                </div>
            </li>
        )
    }
}
Book.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChanger: PropTypes.func.isRequired,
};
export default Book