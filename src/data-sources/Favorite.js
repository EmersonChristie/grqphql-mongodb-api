const { DataSource } = require('apollo-datasource')

const Favorite = require('../models/favorite');

// TODO: Initialize() method

class Favorites extends DataSource {
    constructor(){
        super();

    }

  createFavorite(args) {
    const favorite = new Favorite({
        artId: args.favoriteInput.artId,
        title: args.favoriteInput.title,
        img: args.favoriteInput.img,
        artist: args.favoriteInput.artist,
        dimensions: args.favoriteInput.dimensions,
        medium: args.favoriteInput.medium
    });
    return favorite
          .save()
          .then(result => {
            console.log(result);
            return { ...result._doc };
          })
          .catch(err => {
            console.log(err);
            throw err;
          });
  }
}

module.exports = Favorites;