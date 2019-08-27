const { RESTDataSource } = require("apollo-datasource-rest");

const BASE_URL = "https://artcloudgalleryapi.azurewebsites.net/";
const API_KEY = `${process.env.ARTCLD_API_KEY}`;

class ArtCldAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URL;
  }
  // TODO: request.headers.set("Authorization", this.context.token);
  willSendRequest(request) {
    request.headers.set("Authorization", API_KEY);
  }
  //TODO Error Checking
  async getArt() {
    const { res } = await this.get(`art`);
    return res.Artwork; // TODO .artwork
  }
}
