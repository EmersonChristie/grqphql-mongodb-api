// const express = require("express");
// const bodyParser = require("body-parser");
// const graphqlHttp = require("express-graphql");
// const { buildSchema } = require("graphql");

// // var db = require("./artwork.json");

// const app = express();

// const artwork = [];
// const artists = [];
// const images = [];

// app.use(bodyParser.json());

// app.use(
//   "/graphql",
//   graphqlHttp({
//     schema: buildSchema(`
//         type Artist {
//           _id: ID!
//           name: String!
//           artCldArtistId: String
//           about: String
//           image: String
//         }

//         input ArtistInput {
//           name: String!
//           artCldArtistId: String
//           about: String
//           image: String
//         }

//         type Image {
//           _id: ID!
//           url: String!
//           artCldImgId: String
//           smallUrl: String
//           mediumUrl: String
//           largeUrl: String
//           giantUrl: String
//           primaryR: Int
//           primaryG: Int
//           primaryB: Int
//           secondaryR: Int
//           secondaryG: Int
//           secondaryB: Int
//           tertiaryR: Int
//           tertiaryG: Int
//           tertiaryB: Int
//           width: Int
//           height: Int
//         }

//         input ImageInput {
//           url: String!
//           artCldImgId: ID
//           smallUrl: String
//           mediumUrl: String
//           largeUrl: String
//           giantUrl: String
//           primaryR: Int
//           primaryG: Int
//           primaryB: Int
//           secondaryR: Int
//           secondaryG: Int
//           secondaryB: Int
//           tertiaryR: Int
//           tertiaryG: Int
//           tertiaryB: Int
//           width: Int
//           height: Int
//         }

//         type Dimensions {
//           formatted: String!
//           height: Float!
//           width: Float!
//           depth: Float
//         }

//         input DimensionsInput {
//           height: Float!
//           width: Float!
//           depth: Float
//         }

//         type Art {
//           _id: ID!
//           artCldId: ID
//           artist: Artist!
//           date: String!
//           _price: Float
//           _formattedPrice: String
//           dimensions: Dimensions!
//           image: Image!
//           title: String!
//           tags: [String!]
//         }

//         input ArtInput {
//           artist: ArtistInput!
//           date: String!
//           dimensions: DimensionsInput!
//           image: ImageInput!
//           title: String!
//           tags: [String!]
//         }

//         type Favorite {
//             _id: ID!
//             art: Art!
//             dateCreated: String!
//         }

//         input FavoriteInput {
//             art: ArtInput!
//             dateCreated: String!
//         }

//         type RootQuery {
//           favorites: [String!]!
//           artWorks: [Art!]!
//           artists: [Artist!]!
//           images: [Image!]!
//         }

//         type RootMutation {
//           createArtist(artistInput: ArtistInput): Artist
//           createArt(artInput: ArtInput): Art
//           createFavorite(name: String): String
//         }

//         schema {
//             query: RootQuery
//             mutation: RootMutation
//         }
//     `),
//     rootValue: {
//       artists: () => {
//         return artists;
//       },
//       createArtist: args => {
//         const artist = {
//           name: args.artistInput.name,
//           artCldArtistId: args.artistInput.artCldArtistId,
//           about: args.artistInput.about,
//           image: args.artistInput.image
//         };
//         artists.push(artist);
//         return artist;
//       },

//       artWorks: () => {
//         return artworks;
//       },
//       //   function to find index based on attribute
//       findAttr: (arr, attr, val) => {
//         for (var i = 0; i < arr.length; i += 1) {
//           if (array[i][attr] === value) {
//             return i;
//           }
//         }
//         return -1;
//       },

//       createArt: args => {
//         const art = {
//           artist: args.artInput.artist,
//           date: args.artInput.date,
//           dimensions: args.artInput.dimensions,
//           image: args.artInput.image,
//           title: args.artInput.title,
//           tags: args.artInput.tags
//         };
//         artwork.push(art);
//         return art;
//       },
//       favorites: () => {
//         return ["lskdjflksdjf", "slkdjflksdjf", "sldkjflsakjdf"];
//       },
//       createFavorite: args => {
//         _id: Math.random().toString();
//         return favoriteName;
//       }
//     },
//     graphiql: true
//   })
// );

// app.listen(3000);
