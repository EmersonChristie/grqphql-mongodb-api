require("dotenv").config();

const { ApolloServer } = require("apollo-server");
// const isEmail = require('isemail');

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const ArtCldDataSource = require("./data-sources/artCld");
// const LikesDataSource = require('./data-sources/likes');

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: ({ req }) => {
  //   // simple auth check on every request
  //   const auth = (req.headers && req.headers.authorization) || "";
  //   // const email = Buffer.from(auth, 'base64').toString();

  //   // return { user: isEmail.validate(email) ? email : null };
  // },
  dataSources: () => ({
    artCldAPI: new ArtCldDataSource()
    // likesAPI: new LikesDataSource(),
  })
});

// Start our server
server.listen().then(({ url }) => console.log(`🚀 app running at ${url}`));
