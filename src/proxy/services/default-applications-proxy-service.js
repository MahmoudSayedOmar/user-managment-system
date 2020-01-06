import { BASE_URL } from "../../http-client/constants";
import axios from "axios";

export class DefaultApplicationsProxyService {
  async get() {
    return await axios({
      method: "get",
      url: `${BASE_URL}lockups/BasicApps`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json"
        }
      }
    });
  }
}
