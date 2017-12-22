import React, {Component} from 'react'

class ShelfChanger extends Component{

  render(){
    return(
      <div className="book-shelf-changer">
        <select value={this.props.shelf} onChange={(event) => this.props.changeShelf(this.props.book, event.target.value)}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger;
