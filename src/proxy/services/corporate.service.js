import { BASE_URL } from "../../http-client/constants";

import axios from "axios";

export class CorporateService {
  async get() {
    return await axios({
      method: "get",
      url: `${BASE_URL}corporates/get`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
}
