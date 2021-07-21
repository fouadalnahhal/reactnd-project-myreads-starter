import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
// import * as BooksAPI from './BooksAPI'

class BookShelf extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book, index) => (
                            <Book key={ index} book={book} onShelfChanger={this.props.onShelfChanger} ></Book>
                        ))}
                    </ol>
                </div>
            </div >
        )
    }
}
BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChanger: PropTypes.func.isRequired,
};
export default BookShelf;