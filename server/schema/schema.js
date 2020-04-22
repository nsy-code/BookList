const graphql = require('graphql');
const _ =require('lodash');

const {
	GraphQLObjectType,
 	GraphQLString,
  	GraphQLSchema,
  	GraphQLID,
  	GraphQLInt,
  	GraphQLList,
  	GraphQLNonNull // the parameter is required
} = graphql;

// dummy data
var books=[
	{ name:'Hello world',genre:'A', id: '1', authorId: '1'},
	{ name:'Hi world',genre:'B', id: '2', authorId: '2'},
	{ name:'Hey',genre:'C', id: '3', authorId: '3'},
	{ name:'new book',genre:'B', id: '4', authorId: '2'},
	{ name:'book',genre:'C', id: '5', authorId: '3'},
];

var authors=[
	{ name:'Peter', age:23, id: '1'},
	{ name:'Ben', age:20, id: '2'},
	{ name:'Ken', age:50, id: '3'},
];

const AuthorType = new GraphQLObjectType({
	name:'Author',
	fields: () => ({
		id: { type: GraphQLID }, // can number & string for query
		name: { type: GraphQLString },
		age: { type: GraphQLInt },
		books:{
			type: new GraphQLList(BookType),
			resolve(parent,args){
				return _.filter(books, {authorId: parent.id})
			}
		}
	})
});

const BookType = new GraphQLObjectType({
	name:'Book',
	fields: () => ({
		id: { type: GraphQLID }, 
		name: { type: GraphQLString },
		genre: { type: GraphQLString },
		author: {
			type: AuthorType,
			resolve(parent, args){
				// parent is the initial query result eg. book
				return _.find(authors, {id: parent.authorId});
			}
		}
	})
});

// Entry Point for front-end
const RootQuert = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		book: {
			type: BookType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args){
				// code to get data from data / other source

				// args.id is a string when no query
				return _.find(books, { id: args.id });
			}
		},
		author: {
			type: AuthorType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args){
				return _.find(authors, { id: args.id });
			}
		},
		books:{
			type: new GraphQLList(BookType),
			resolve(parent,args){
				return books;
			}
		},
		authors:{
			type: new GraphQLList(AuthorType),
			resolve(parent,args){
				return authors;
			}
		}
	}
});

const Mutation = new GraphQLObjectType({
	name:'Mutation',
	fields:{
		addAuthor:{
			type: AuthorType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
				age: { type: new GraphQLNonNull(GraphQLInt) }
			},
			resolve(parent, args){
				// create new data
				let author = { 
					name: args.name,
					age: args.age
				}; 
				// add to the database
				authors.push(author);

				return author;
			}
		},
		addBook:{
			type: BookType,
			args:{
				name:{ type: new GraphQLNonNull(GraphQLString) },
				genre:{ type: new GraphQLNonNull(GraphQLString) },
				authorId:{ type: new GraphQLNonNull(GraphQLID) }
			},
			resolve(parent, args){
				let book = { 
					name: args.name,
					genre: args.genre,
					id: Math.floor(Math.random() * 100).toString(),
					authorId: args.authorId
				}; 
				books.push(book);

				return book;
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: RootQuert,
	mutation: Mutation
})