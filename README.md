# BookListApp
It combines react, express js and graphQL.

## The basic structure
<img src="https://github.com/fishxxxx/BookListApp/blob/master/img/structure.png" width="500">


## The Client Side
It uses React.js and Apollo which handles GraphQL query.  
It can query the book list, author list, book's detail and add new book.  
### React demo
<img src="https://github.com/fishxxxx/BookListApp/blob/master/img/react_demo.gif" width="300">

### Using graphiql
#### use Query
<img src="https://github.com/fishxxxx/BookListApp/blob/master/img/graphql1.png" width="600">  

#### use Mutation
<img src="https://github.com/fishxxxx/BookListApp/blob/master/img/graphql2.png" width="600">  

## The Server Side
It use express js as GraphQL server to CRUD data from database.

### Installation
```npm install nodemon -g ```  
It is a tool that automatically restarting the node app when there is changes saved.
```
npm install
nodemon app.js
```
