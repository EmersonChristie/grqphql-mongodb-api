/*
Remember the resolver function signature:
fieldName: (obj, args, context, info) => result;
*/
module.exports = {
  Query: {
    artwork: (root, _, { dataSources }) => {
      // API restriction
      return dataSources.artCldAPI.getArt();
    }
  }
};
