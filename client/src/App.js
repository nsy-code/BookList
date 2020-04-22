import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Components
import BookList from './components/BookList';
import AddBook from './components/AddBook';


// apollo client setup
const client = new ApolloClient({
  uri: 'http://127.0.0.1:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Book List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
