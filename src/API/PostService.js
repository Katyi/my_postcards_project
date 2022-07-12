import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get('https://my-json-server.typicode.com/katyi/mockjson/albums', {
      params: {
        _limit: limit,
        _page: page
        }
      })
    return response;
  }

  // static async getById(id) {
  //   const response = await axios.get('https://api.dropboxapi.com/2/files/list_folder/' + id)
  //   return response;
  // }

  static async getCommentsByPostId(id) {
    const response = await axios.get(`https://my-json-server.typicode.com/katyi/mockjson/albums/${id}/photos`)
    return response;
  }
}