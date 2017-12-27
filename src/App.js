import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage'
import { Link,Route } from 'react-router-dom'


class BooksApp extends React.Component {

  state = {
    showSearchPage: false,
    books: []
    // books: {
    //   currentlyReading: [],
    //   wantToRead: [],
    //   read: []
    // }
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
    BooksAPI.getAll().then(books => {
      this.setState({books});
    });
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">

          {/* <div className="list-books"> */}

            {/* <div className="list-books-content">
              <div>
                <ListBooks books={this.state.books} changeShelf={this.changeShelf}/>
              </div>
            </div> */}

            <Route
              exact path="/"
              render={() => (
                <div>
                  <ListBooks
                    books={this.state.books}
                    changeShelf={this.changeShelf}
                  />

                  <div className="open-search">
                    <Link to="/search">Add a book</Link>
                  </div>
                </div>
              )}
            />

            <Route
              path="/search"
              render={( {history}) => (
                <SearchPage
                  books={this.state.books}
                  changeShelf={this.changeShelf}
                />
              )}
            />

            {/* <div className="open-search">
              <SearchPage />
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )} */}
      </div>
    )
  }
}

export default BooksApp
