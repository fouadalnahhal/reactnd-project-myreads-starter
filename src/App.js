import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import { Link, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  changeShelf = async (book, newShelf) => {
    BooksAPI.update(book, newShelf);
    book.shelf = newShelf;
    const books = this.state.books.filter((b) => b.id !== book.id).concat(book);
    this.setState({ books: books });
  };
  handleCloseSearch = () => this.setState({ showSearchPage: false });
  handleOpenSearch = () => this.setState({ showSearchPage: true });
  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => {
          return <SearchBooks books={this.state.books} handleCloseSearch={this.handleCloseSearch} onShelfChanger={this.changeShelf}></SearchBooks>
        }}>
        </Route>
        <Route exact path='/' render={() => {
          return <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf books={this.state.books.filter(book => book.shelf === "currentlyReading")} shelf="Currently Reading" onShelfChanger={this.changeShelf}></BookShelf>
                <BookShelf books={this.state.books.filter(book => book.shelf === "wantToRead")} shelf="Want to Read" onShelfChanger={this.changeShelf}></BookShelf>
                <BookShelf books={this.state.books.filter(book => book.shelf === "read")} shelf="Read" onShelfChanger={this.changeShelf}></BookShelf>
              </div>
            </div>
            <Link to="/search">
            <div className="open-search">
              <button >Add a book</button>
            </div>
            </Link>
          </div>
        }}></Route>
        {/* {this.state.showSearchPage ? (
        ) : (
          
        )} */}
      </div>
    )
  }
}

export default BooksApp
