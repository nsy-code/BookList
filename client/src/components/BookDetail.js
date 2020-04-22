import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

class BookDetail extends Component {
    displayBookDetails() {
        const { book } = this.props.data;
        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul>
                        {
                            book.author.books.map((book, i) => {
                                return <li key={i}>{book.name}</li>
                            })
                        }
                    </ul>
                </div>
            )
        } else {
            return (
                <div>No book selected...</div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.displayBookDetails()}
            </div>
        )
    }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetail);