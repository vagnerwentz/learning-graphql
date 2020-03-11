const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const app = express();

const models = require('./src/models');
const typeDefs = require('./src/typeDefs');
const resolvers = require('./src/resolvers');


//const me = users[0];


const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.applyMiddleware({ app });

app.listen(3000, () => console.info('Apollo GraphQL server is running on port 3000'));
