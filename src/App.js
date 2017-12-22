import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {

  state = {
    showSearchPage: false,
    books: [],
    shelf: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books});
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(books => {
      this.setState({shelf});
    });
  }

  render() {
    return (
      <div className="app">
          <ListBooks books={this.state.books} changeShelf={this.changeShelf}/>
      </div>)
  }
}

export default BooksApp
