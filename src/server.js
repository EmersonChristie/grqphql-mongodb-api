require("dotenv").config();


const mongoose = require("mongoose");

const { ApolloServer } = require("apollo-server");
// const isEmail = require('isemail');

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

// DataSources
const Artwork = require("./data-sources/Artwork");
const Favorites = require("./data-sources/Favorite");

// MongoDB

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: ({ req }) => {
  //   // simple auth check on every request
  //   const auth = (req.headers && req.headers.authorization) || "";
  //   const email = Buffer.from(auth, 'base64').toString();

  //   return { user: isEmail.validate(email) ? email : null };
  // },
  dataSources: () => ({
    Artwork: new Artwork(),
    Favorites: new Favorites()
    // likesAPI: new LikesDataSource(),
  })
});

// Connect to MongoDB
mongoose.connect(`mongodb+srv://emersonc:Algorithm!@paq-28cb2.mongodb.net/test?retryWrites=true&w=majority`).then(() => {
  // Start our server
  server.listen().then(({ url }) => console.log(`🚀 app running at ${url}`));

}).catch(err => {
  console.log(err);
})
