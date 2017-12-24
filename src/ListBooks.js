import React, {Component} from 'react'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {

  render() {
    let currentlyReading = this.props.books.filter(function(book) {
      return book.shelf === "currentlyReading";
    });

    let wantToRead = this.props.books.filter(function(book) {
      return book.shelf === "wantToRead";
    });

    let read = this.props.books.filter(function(book) {
      return book.shelf === "read";
    });

    return(
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <Bookshelf key="currentlyReading" books={currentlyReading} changeShelf={this.props.changeShelf} shelf="Currently Reading"></Bookshelf>

          <Bookshelf key="wantToRead" books={wantToRead} changeShelf={this.props.changeShelf} shelf="Want To Read"></Bookshelf>

          <Bookshelf key="Read" books={read} changeShelf={this.props.changeShelf} shelf="Read"></Bookshelf>

        </div>

      </div>
    )
  }
}

export default ListBooks;
