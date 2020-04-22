import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { flowRight as compose } from 'lodash'
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries'

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        }
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    }

    displayAuthors() {
        let data = this.props.getAuthorsQuery;
        if (data.loading) {
            return (<option disabled>Loading authors</option>);
        } else {
            return data.authors.map(author => {
                return (<option key={author.id} value={author.id}>{author.name}</option>);
            });
        }
    }

    render() {
        return (
            <form id="add_book_form" onSubmit={this.submit}>
                <div className="field">
                    <label>Book name:</label>
                    <input name='name' type="text" onChange={(e) => this.setState({ name: e.target.value })} />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input name='genre' type="text" onChange={(e) => this.setState({ genre: e.target.value })} />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select name="authorSelect" onChange={(e) => this.setState({ authorId: e.target.value })}>
                        <option>Select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>Add</button>
            </form>
        )
    }
}
export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook)
