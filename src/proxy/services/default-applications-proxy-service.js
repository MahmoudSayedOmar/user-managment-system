import { BASE_URL } from "../../http-client/constants";

import axios from 'axios';

export class DefaultApplicationsProxyService {
  async getAll() {
    return await axios({
      method: "get",
      url: "https://api.myjson.com/bins/gq9qw",
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
}
