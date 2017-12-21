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

    return (<div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <Bookshelf key="currentlyReading" books={currentlyReading} shelf="Currently Reading"></Bookshelf>

      <Bookshelf key="wantToRead" books={wantToRead} shelf="Want To Read"></Bookshelf>

      <Bookshelf key="Read" books={read} shelf="Read"></Bookshelf>

    </div>)
  }
}

export default ListBooks;
