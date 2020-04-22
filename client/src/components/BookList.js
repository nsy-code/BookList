import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getBooksQuery } from '../queries/queries'

// components
import BookDetail from './BookDetail'

class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    displayBooks() {
        let data = this.props.data;
        if (data.loading) {
            return (<div>Loading</div>)
        } else {
            return data.books.map((book, i) => {
                return (
                    <li
                        className='booklist'
                        key={i}
                        onClick={(e) => { this.setState({ selected: book.id }) }}
                        style={{cursor:'pointer'}}
                    >
                        {book.name}
                    </li>
                )
            })
        }
    }
    render() {
        return (
            <div>
                <ul id="book-list">
                    {this.displayBooks()}
                </ul>
                <hr />
                <BookDetail bookId={this.state.selected} />
                <hr />
            </div>
        )
    }
}
export default graphql(getBooksQuery)(BookList)
