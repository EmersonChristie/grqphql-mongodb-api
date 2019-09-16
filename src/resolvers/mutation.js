module.exports = {
    Mutation: {
      createFavorite: async (_, args, { dataSources }) =>  await dataSources.Favorites.createFavorite(args)
    }
  };