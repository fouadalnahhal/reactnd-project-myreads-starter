import React from 'react';
import PropTypes from 'prop-types';
// import * as BooksAPI from './BooksAPI'

class ShelfChanger extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        value: "none",
    }
    async componentDidMount() {
        if (this.props.book.shelf === undefined) {
            const exsistingBook = this.props.books.filter(book => book.id === this.props.book.id);
            if (exsistingBook !== undefined && exsistingBook.length > 0) {
                this.setState({ value: exsistingBook[0].shelf });
            }
        } else {
            this.setState({ value: this.props.book.shelf });
        }
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
        this.props.onShelfChanger(this.props.book, event.target.value)
    };

    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}
ShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChanger: PropTypes.func.isRequired,
};
export default ShelfChanger