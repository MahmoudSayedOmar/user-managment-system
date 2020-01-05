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

  async add(newCoprorate) {
    debugger;
    return await axios({
      method: "post",
      url: `${BASE_URL}corporates/add`,
      data: newCoprorate,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
}
