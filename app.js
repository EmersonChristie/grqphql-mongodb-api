const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const { buildSchema } = require("graphql");

var db = require("./artwork.json");

const app = express();

const artwork = [];

app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHttp({
    schema: buildSchema(`
        type Artist {
          _id: ID!
          artCldArtistId: ID
          name: String!
          about: String
          image: String
        }

        type Image {
          _id: ID!
          artCldImgId: ID
          url: String!
          smallUrl: String
          mediumUrl: String
          largeUrl: String
          giantUrl: String
          primaryR: Int
          primaryG: Int
          primaryB: Int
          secondaryR: Int
          secondaryG: Int
          secondaryB: Int
          tertiaryR: Int
          tertiaryG: Int
          tertiaryB: Int
          width: Int
          height: Int
        }

        type Dimensions {
          formatted: String!
          height: Float!
          width: Float!
          depth: Float
        }

        type Art {
          _id: ID!
          artCldId: ID
          artist: Artist!
          date: String!
          _price: Float
          _formattedPrice: String
          dimensions: Dimensions!
          image: Image!
          title: String!
          tags: [String!]
        }

        input ArtInput {
          artist: Artist!
          date: String!
          dimensions: Dimensions!
          image: Image!
          title: String!
          tags: [String!]
        }

        type Favorite {
            _id: ID!
            art: Art!
            dateCreated: String!
        }

        input FavoriteInput {
            art: Art!
            dateCreated: String!
        }

        type RootQuery {
          favorites: [String!]!
          artWorks: [Art!]!
        }

        type RootMutation {
          createArt(artInput: ArtInput): Art
          createFavorite(name: String): String
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
        artWorks: () => {

        }
        createArt: args => {
            const art = new Art({
                artist: args.artInput.artist,
                date: args.artInput.date,
                dimensions: args.artInput.dimensions,
                image: args.artInput.image,
                title: args.artInput.title,
                tags: args.artInput.tags
            });
            
        }
      favorites: () => {
        return ["lskdjflksdjf", "slkdjflksdjf", "sldkjflsakjdf"];
      },
      createFavorite: args => {
        _id: Math.random().toString();
        return favoriteName;
      }
    },
    graphiql: true
  })
);

app.listen(3000);
