const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./schemas/typeDefs.js")
const resolvers = require("./schemas/resolvers")
const { MONGODB } = require("./config/config.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => ({req})
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: 3001 });
  })

  .then((res) => {
    console.log(`server running at ${res.url}`);
  });
