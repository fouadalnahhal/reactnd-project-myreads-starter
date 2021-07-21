import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        books: [],
    }
    handleSearch = (event) => {
        const { value } = event.target;
        BooksAPI.search(value).then(books => {
            if (books === undefined) {
                this.setState({ books: [] });
            } else {
                this.setState({ books: books });
            }
        });

    };
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={this.props.handleCloseSearch}>Close</button>
                    <div className="search-books-input-wrapper">
                        {
                            /*
                                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                                You can find these search terms here:
                                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
    
                                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                                you don't find a specific author or title. Every search is limited by search terms.
                                */
                        }
                        <input type="text" placeholder="Search by title or author" onChange={this.handleSearch} />

                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.length > 0 && (this.state.books.map((book, index) => 
                        <Book key={index} book={book} onShelfChanger={this.props.onShelfChanger} ></Book>))}
                    </ol>
                </div>

            </div>
        )
    }
}
SearchBooks.propTypes = {
    onShelfChanger: PropTypes.func.isRequired,
};
export default SearchBooks