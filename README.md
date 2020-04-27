# BookListApp
## Table of Content
1. [App info](#appinfo)
2. [Technologies](#technologies)
3. [design](#design)
4. [features](#features)
5. [Installation](#installation)
6. [inspiration](#inspiration)


<a name="appinfo"></a>
## App info
This web app is to create something like To-do-list. The main purpose is to use GraphQL as the method between front-end application and back-end server and database.  
<p align="center">
  <img src="https://github.com/fishxxxx/BookListApp/blob/master/img/react_demo.gif" width="300" >
</p>

<a name="technologies"></a>
## Technologies  
This project is created with
- [React js](https://github.com/facebook/create-react-app)
- [Express js](https://github.com/fishxxxx/BookListApp/blob/master/img/graphql2.png)
- [GraphQL](https://graphql.org/)

<a name="design"></a>
## The design
<img src="https://github.com/fishxxxx/BookListApp/blob/master/img/structure.png" width="500">

<a name="features"></a>
## Features
- It uses React.js and Apollo which handles GraphQL query.  
- It displays book list
- It render author list when clicking the select field
- It displays book's detail when clicking the item of book list
- It support adding new book   
- It use express js as GraphQL server
- It doesn't use database, use array instead

### Using graphiql
#### use Query
<img src="https://github.com/fishxxxx/BookListApp/blob/master/img/graphql1.png" width="600">  

#### use Mutation
<img src="https://github.com/fishxxxx/BookListApp/blob/master/img/graphql2.png" width="600">  

<a name="installation"></a>
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

<a name="inspiration"></a>
## Inspiration
This app is based on [GraphQL Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f) from TheNetNinja.
