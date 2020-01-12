import { BASE_URL } from "../../http-client/constants";
import axios from "axios";

export class ModulesProxyService {
  async get() {
    return await axios({
      method: "get",
      url: `${BASE_URL}lockups/Modules`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
}
