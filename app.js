const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const { buildSchema } = require("graphql");

var db = require("./artwork.json");

const app = express();

app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHttp({
    schema: buildSchema(`
        type RootQuery {
            favorites: [String!]!
        }

        type RootMutation {
            createFavorite(name: String): String
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
      favorites: () => {
        return ["lskdjflksdjf", "slkdjflksdjf", "sldkjflsakjdf"];
      },
      createFavorite: args => {
        const favoriteName = args.name;
        return favoriteName;
      }
    },
    graphiql: true
  })
);

app.listen(3000);
