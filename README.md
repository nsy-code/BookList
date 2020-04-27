# BookListApp

## App info
This web app is to create something like To-do-list. The main purpose is to use GraphQL as the method between front-end application and back-end server and database.  
<img src="https://github.com/fishxxxx/BookListApp/blob/master/img/react_demo.gif" width="300">

## Technologies  
This project is created with
- [React js](https://github.com/facebook/create-react-app)
- [Express js](https://github.com/fishxxxx/BookListApp/blob/master/img/graphql2.png)
- [GraphQL](https://graphql.org/)

## The design
<img src="https://github.com/fishxxxx/BookListApp/blob/master/img/structure.png" width="500">

### The Client 
It uses React.js and Apollo which handles GraphQL query.  
It can query the book list, author list, book's detail and add new book.  

### The Server 
It use express js as GraphQL server to CRUD data from database.

#### Using graphiql
##### use Query
<img src="https://github.com/fishxxxx/BookListApp/blob/master/img/graphql1.png" width="600">  

##### use Mutation
<img src="https://github.com/fishxxxx/BookListApp/blob/master/img/graphql2.png" width="600">  

## Installation
### The Client 
```
npm install  
npm start
```
### The Server 
```npm install nodemon -g ```  
It is a tool that automatically restarts the node app when there are some changes saved.
```
npm install
nodemon app.js
```

## Inspiration
This app is based on [GraphQL Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f) from TheNetNinja.
