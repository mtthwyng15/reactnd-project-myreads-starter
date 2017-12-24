import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import ShelfChanger from './ShelfChanger'

class SearchPage extends Component{

  state = {
    query: '',
    books: []
//    booksFound: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    });

    this.searchBook(query);
    }

    searchBook = (query) => {
      BooksAPI.search(query,20).then((books) => {
        this.setState({books})
      });
    }

    render(){
      const {query, searchBook} = this.state
      console.log(query)

      return(

        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/"> Close </Link>

            <div className="search-books-input-wrapper">
              <input type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value.trim())}/>
            </div>
          </div>

          <div className="search-books-results">
            <ol className="books-grid">

              {this.state.books.map((book) => <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: "url(" + book.imageLinks.smallThumbnail + ")"
                      }}>
                    </div>

                    <ShelfChanger book={this.searchBook(this.state.books)} changeShelf={this.props.changeShelf}/>

                  </div>

                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>)
            }
            </ol>
          </div>
      </div>
      )
    }
  }

export default SearchPage;
